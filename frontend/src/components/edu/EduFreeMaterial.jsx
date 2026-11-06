import { useState } from "react";
import { ArrowDown, CheckCircle2, FileDown, FileText, LoaderCircle } from "lucide-react";

const PDF_URL = "/Anatomia-clinica-para-fisioterapia.pdf";
const PDF_FILENAME = "Anatomia-clinica-para-fisioterapia.pdf";

const EduFreeMaterial = () => {
  const [lead, setLead] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [materialEmailSent, setMaterialEmailSent] = useState(true);

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
      const response = await fetch("/api/material-gratuito.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...submittedLead,
          consent: formData.get("consent") === "on",
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(
          result.detail ||
            "Não foi possível enviar seus dados. Verifique a configuração do PHP na hospedagem e tente novamente."
        );
      }

      setLead(submittedLead);
      setMaterialEmailSent(result.material_sent);
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
            Baixe gratuitamente o material Anatomia Clínica para Fisioterapia,
            preparado para apoiar seus estudos e sua formação profissional.
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
                {materialEmailSent
                  ? `O PDF também foi enviado para ${lead.email}.`
                  : `Não foi possível enviar o PDF para ${lead.email}. O download está disponível abaixo.`}
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
                Seus dados foram enviados somente para atender a esta
                solicitação; o site não os armazena.
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
                  Concordo em compartilhar meus dados com a EDUSAUDE para
                  receber este material e registrar meu interesse.
                </span>
              </label>
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[10000px] h-px w-px overflow-hidden"
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
                Seus dados serão enviados automaticamente e o PDF será baixado
                e enviado para seu e-mail.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EduFreeMaterial;
