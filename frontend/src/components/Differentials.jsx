import React from "react";
import { EXTRA_SERVICES } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { FileText, Home, Users } from "lucide-react";

const ICONS = { FileText, Home, Users };

export default function ExtraServices() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 dark:bg-emerald-950/50 px-3.5 py-1.5 rounded-full">
              Serviços Especializados
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              Demais Serviços Ofertados
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
              Soluções complementares para suporte ao paciente, familiares e cuidadores.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {EXTRA_SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon] || FileText;

            return (
              <Reveal key={service.id || index} delay={0.1 * index}>
                <div className="flex flex-col h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-800 dark:border-slate-700">
                  {/* Imagem do Serviço */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 shadow-md backdrop-blur-sm dark:bg-slate-900/90">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                  </div>

                  {/* Conteúdo em Texto */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}