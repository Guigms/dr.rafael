import { useState } from "react";
import { ArrowDown, CheckCircle2, FileDown, FileText, LoaderCircle } from "lucide-react";

const PDF_URL = "/Anatomia-clinica-para-fisioterapia.pdf";
const PDF_FILENAME = "Anatomia-clinica-para-fisioterapia.pdf";
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY?.trim();
const WEB3FORMS_CC_EMAIL = process.env.REACT_APP_WEB3FORMS_CC_EMAIL?.trim();

const EduFreeMaterial = () => {
  const [lead, setLead] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const downloadMaterial = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const submittedLead = {
      name: formData.get("name").trim(),
      phone: formData.get("phone").trim(),
      email: formData.get("email").trim(),
    };

    setIsSubmitting(true);
    setError("");

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error(
          "O formulário ainda não está configurado. A chave do Web3Forms precisa ser adicionada pelo responsável do site."
        );
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Novo interessado no material gratuito da EDUSAUDE",
          from_name: "EDUSAUDE",
          ...(WEB3FORMS_CC_EMAIL && { ccemail: WEB3FORMS_CC_EMAIL }),
          message:
            "A pessoa solicitou acesso ao material gratuito da EDUSAUDE. Autorizou o compartilhamento dos dados para receber o material e registrar o interesse.",
          ...submittedLead,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Não foi possível enviar seus dados. Tente novamente."
        );
      }

      setLead(submittedLead);
      downloadMaterial();
      form.reset();
    } catch (requestError) {
      setError(
        requestError.message ||
          "Não foi possível enviar seus dados. Verifique sua conexão e tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="material-gratuito"
      data-testid="edu-free-material"
      className="bg-white py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-teallight px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-teal">
            <FileText className="h-4 w-4" />
            Material gratuito
          </span>
          <h2 className="mt-6 max-w-xl font-serif text-3xl font-medium leading-tight text-brand-ink sm:text-4xl">
            Explore a anatomia clínica aplicada à fisioterapia.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
            Para acessar gratuitamente o material Anatomia Clínica para
            Fisioterapia, informe seus dados de contato. O responsável poderá
            falar com você e o PDF ficará disponível para baixar.
          </p>
          <div className="mt-7 flex items-center gap-3 text-sm font-medium text-brand-petrol">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-teal" />
            PDF gratuito para baixar imediatamente
          </div>
        </div>

        <div className="rounded-3xl border hairline bg-brand-paper p-6 sm:p-8">
          {lead ? (
            <div
              role="status"
              data-testid="edu-free-material-success"
              className="flex min-h-64 flex-col items-center justify-center text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teallight">
                <CheckCircle2 className="h-7 w-7 text-brand-teal" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-medium text-brand-ink">
                Seu material está pronto!
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-muted">
                Seus dados foram enviados para a EDUSAUDE.
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-muted">
                O responsável poderá entrar em contato pelo telefone ou e-mail
                informado. O PDF está disponível para baixar abaixo.
              </p>
              <button
                type="button"
                onClick={downloadMaterial}
                data-testid="edu-free-material-download"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-petrol"
              >
                <FileDown className="h-4 w-4" />
                Baixar PDF novamente
              </button>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-brand-muted">
                Seus dados foram encaminhados ao responsável da EDUSAUDE por
                meio do Web3Forms para atender a esta solicitação; o site não
                os armazena.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-brand-ink">
                Baixe seu material gratuito
              </h3>
              <div>
                <label
                  htmlFor="free-material-name"
                  className="mb-1.5 block text-xs font-semibold text-brand-petrol"
                >
                  Nome
                </label>
                <input
                  id="free-material-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  required
                  className="w-full rounded-xl border hairline bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="free-material-phone"
                  className="mb-1.5 block text-xs font-semibold text-brand-petrol"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="free-material-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  required
                  className="w-full rounded-xl border hairline bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="free-material-email"
                  className="mb-1.5 block text-xs font-semibold text-brand-petrol"
                >
                  E-mail
                </label>
                <input
                  id="free-material-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-xl border hairline bg-white px-4 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15"
                  placeholder="voce@exemplo.com"
                />
              </div>
              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-brand-muted">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-brand-teal"
                />
                <span>
                  Concordo em compartilhar meus dados com o responsável da
                  EDUSAUDE, por meio do Web3Forms, para receber este material e
                  registrar meu interesse.
                </span>
              </label>
              <input
                type="checkbox"
                name="botcheck"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden"
              />
              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="edu-free-material-submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-6 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-brand-petrol disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero meu material gratuito
                    <ArrowDown className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] leading-relaxed text-brand-muted">
                Seus dados serão enviados ao responsável da EDUSAUDE. Após a
                confirmação, o PDF será baixado nesta página.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EduFreeMaterial;
