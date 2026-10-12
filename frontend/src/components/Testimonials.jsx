import React from "react";
import { TESTIMONIALS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 dark:bg-emerald-950/50 px-3.5 py-1.5 rounded-full">
              Relatos Reais
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              O que dizem os pacientes
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
              Conheça as histórias de quem transformou a sua qualidade de vida com a fisioterapia.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.id} delay={0.1 * index}>
              <div className="flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
                
                {/* Se houver vídeo MP4 Local */}
                {t.video && (
                  <div className="relative w-full aspect-[9/16] bg-black rounded-t-3xl overflow-hidden max-h-[380px]">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={t.poster || ""}
                      className="w-full h-full object-cover"
                    >
                      <source src={t.video} type="video/mp4" />
                      Seu navegador não suporta a exibição deste vídeo.
                    </video>
                  </div>
                )}

                {/* Se houver vídeo Embed do YouTube/Vimeo */}
                {t.embedUrl && !t.video && (
                  <div className="relative w-full aspect-video bg-black rounded-t-3xl overflow-hidden">
                    <iframe
                      src={t.embedUrl}
                      title={`Depoimento de ${t.name}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Conteúdo em Texto */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <Quote className="h-8 w-8 text-emerald-500/30 mb-3" />
                  <p className="italic text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  
                  <div className="mt-auto flex items-center gap-3 border-t border-slate-100 dark:border-slate-700/60 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {t.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t.context}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}