import React from "react";
import {
  BookOpen,
  MonitorPlay,
  Tablet,
  FileQuestion,
  Brain,
  ClipboardList,
  Package,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { EDU_CATEGORIES } from "@/lib/edu";
import { buildWaLink } from "@/lib/site";

const CATEGORY_ICONS = {
  BookOpen,
  MonitorPlay,
  Tablet,
  FileQuestion,
  Brain,
  ClipboardList,
  Package,
};

export default function EduCategories() {
  return (
    <section id="materiais" className="py-20 bg-brand-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Categorias e Materiais</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl font-normal leading-[1.15] tracking-tight text-brand-ink sm:text-3xl lg:text-4xl">
              Cursos livres, apostilas e materiais didáticos.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EDU_CATEGORIES.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.icon] || BookOpen;
            const waLink = buildWaLink(`Olá, Dr. Rafael! Tenho interesse no material de "${cat.title}" da EDUSAUDE.`);
            const targetUrl = cat.buyUrl || waLink;
            const hasBuyUrl = Boolean(cat.buyUrl);

            return (
              <Reveal key={cat.id || i} delay={0.05 * i}>
                <div className="flex h-full flex-col justify-between rounded-3xl border hairline bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teallight text-brand-teal mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-brand-ink">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                      {cat.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-hairline">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-xs font-bold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:bg-brand-petrol"
                    >
                      {hasBuyUrl ? (
                        <>
                          <ShoppingCart className="h-3.5 w-3.5" />
                          Acessar Página de Vendas
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-3.5 w-3.5" />
                          Tenho Interesse
                        </>
                      )}
                    </a>
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