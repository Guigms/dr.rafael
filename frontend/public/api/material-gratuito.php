<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (!is_file($autoloadPath)) {
    error_log('EDUSAUDE: PHPMailer não instalado.');
    respond(503, ['detail' => 'O serviço de e-mail ainda não está instalado na hospedagem.']);
}
require $autoloadPath;

function sendTextEmail(
    array $smtp,
    string $recipient,
    string $subject,
    string $body,
    ?string $replyTo = null,
    ?string $attachmentPath = null
): void {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtp['host'];
    $mail->SMTPAuth = true;
    $mail->Username = $smtp['username'];
    $mail->Password = $smtp['password'];
    $mail->Port = (int) $smtp['port'];
    $mail->SMTPSecure = $smtp['encryption'] === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Timeout = 20;
    $mail->setFrom($smtp['username'], 'EDUSAUDE');
    $mail->addAddress($recipient);

    if ($replyTo !== null) {
        $mail->addReplyTo($replyTo);
    }

    if ($attachmentPath !== null) {
        $mail->addAttachment($attachmentPath, 'Anatomia-clinica-para-fisioterapia.pdf');
    }

    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->isHTML(false);
    $mail->send();
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['detail' => 'Método não permitido.']);
}

if (
    isset($_SERVER['CONTENT_LENGTH'])
    && (int) $_SERVER['CONTENT_LENGTH'] > 10000
) {
    respond(413, ['detail' => 'Os dados enviados excedem o limite permitido.']);
}

$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
if ($contentType !== 'application/json') {
    respond(415, ['detail' => 'Envie os dados no formato JSON.']);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$requestHost = parse_url('https://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST);
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    if (!is_string($originHost) || !is_string($requestHost) || strcasecmp($originHost, $requestHost) !== 0) {
        respond(403, ['detail' => 'Origem da solicitação não autorizada.']);
    }
}

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    respond(400, ['detail' => 'Não foi possível ler os dados enviados.']);
}

$name = trim((string) ($input['name'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$consent = ($input['consent'] ?? false) === true;
$honeypot = trim((string) ($input['website'] ?? ''));

if ($honeypot !== '') {
    respond(400, ['detail' => 'Não foi possível processar esta solicitação.']);
}

if (
    strlen($name) < 2
    || strlen($name) > 240
    || strlen($phone) > 60
    || strlen($email) > 254
    || strlen(preg_replace('/\D+/', '', $phone) ?? '') < 8
    || filter_var($email, FILTER_VALIDATE_EMAIL) === false
    || !$consent
) {
    respond(422, ['detail' => 'Confira o nome, o telefone, o e-mail e o consentimento.']);
}

$ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitPath = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
    . DIRECTORY_SEPARATOR
    . 'drrafael_edu_'
    . hash('sha256', $ipAddress)
    . '.json';
$rateLimitFile = fopen($rateLimitPath, 'c+');
if ($rateLimitFile === false || !flock($rateLimitFile, LOCK_EX)) {
    if (is_resource($rateLimitFile)) {
        fclose($rateLimitFile);
    }
    error_log('EDUSAUDE: não foi possível verificar o limite de solicitações.');
    respond(503, ['detail' => 'Não foi possível processar a solicitação agora. Tente novamente mais tarde.']);
}

$storedRequests = json_decode(stream_get_contents($rateLimitFile) ?: '[]', true);
$recentRequests = is_array($storedRequests)
    ? array_values(array_filter(
        $storedRequests,
        static fn ($timestamp): bool => is_int($timestamp) && $timestamp > time() - 600
    ))
    : [];

if (count($recentRequests) >= 5) {
    flock($rateLimitFile, LOCK_UN);
    fclose($rateLimitFile);
    respond(429, ['detail' => 'Muitas solicitações. Aguarde alguns minutos e tente novamente.']);
}

$recentRequests[] = time();
rewind($rateLimitFile);
ftruncate($rateLimitFile, 0);
fwrite($rateLimitFile, json_encode($recentRequests));
fflush($rateLimitFile);
flock($rateLimitFile, LOCK_UN);
fclose($rateLimitFile);

$configPath = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'titan-mail-config.php';
if (!is_file($configPath)) {
    error_log('EDUSAUDE: arquivo de configuração SMTP ausente.');
    respond(503, ['detail' => 'O envio de e-mails ainda não está configurado. Entre em contato pelo e-mail do site.']);
}

$smtp = require $configPath;
if (
    !is_array($smtp)
    || !isset($smtp['host'], $smtp['port'], $smtp['username'], $smtp['password'], $smtp['encryption'])
    || $smtp['username'] === ''
    || $smtp['password'] === ''
    || filter_var($smtp['username'], FILTER_VALIDATE_EMAIL) === false
) {
    error_log('EDUSAUDE: configuração SMTP inválida.');
    respond(503, ['detail' => 'O envio de e-mails ainda não está configurado corretamente.']);
}

$pdfPath = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'Anatomia-clinica-para-fisioterapia.pdf';
if (!is_file($pdfPath) || !is_readable($pdfPath)) {
    error_log('EDUSAUDE: PDF do material gratuito não encontrado ou não pode ser lido.');
    respond(503, ['detail' => 'O material gratuito está temporariamente indisponível.']);
}

$ownerEmail = 'rafaeldantas@rafaeldantasfisio.com.br';
$leadBody = "Novo interessado no material gratuito da EDUSAUDE.\n\n"
    . "Nome: {$name}\n"
    . "Telefone: {$phone}\n"
    . "E-mail: {$email}\n";

try {
    sendTextEmail(
        $smtp,
        $ownerEmail,
        'Novo interessado no material gratuito da EDUSAUDE',
        $leadBody,
        $email
    );
} catch (Throwable $exception) {
    error_log('EDUSAUDE: falha ao notificar o responsável: ' . $exception->getMessage());
    respond(502, ['detail' => 'Não foi possível avisar o responsável pelo site. Tente novamente mais tarde.']);
}

$materialSent = true;
try {
    sendTextEmail(
        $smtp,
        $email,
        'Seu material gratuito da EDUSAUDE',
        "Olá, {$name}!\n\n"
            . "Obrigado pelo interesse na EDUSAUDE. O material gratuito está anexado a este e-mail.\n\n"
            . "Bons estudos!\nEquipe EDUSAUDE",
        null,
        $pdfPath
    );
} catch (Throwable $exception) {
    $materialSent = false;
    error_log('EDUSAUDE: falha ao enviar o PDF ao interessado: ' . $exception->getMessage());
}

respond(200, [
    'ok' => true,
    'material_sent' => $materialSent,
    'detail' => $materialSent
        ? 'Seus dados foram enviados ao responsável e o PDF foi encaminhado para o seu e-mail.'
        : 'Seus dados foram enviados ao responsável. Você ainda pode baixar o PDF nesta página, mas o envio por e-mail não foi concluído.',
]);
