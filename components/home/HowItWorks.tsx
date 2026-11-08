'use client';

import { Compass, MessageCircle, Plane, Mail } from 'lucide-react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { SectionHeading } from '@/components/site/SectionHeading';
import { PASOS } from '@/data/contenido';

const iconos = [MessageCircle, Compass, Mail, Plane];

export function HowItWorks() {
  const { tx } = usePreferencias();
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={tx({ es: 'Cómo funciona', en: 'How it works' })}
          title={tx({ es: 'De la idea al viaje en cuatro pasos', en: 'From idea to trip in four steps' })}
          description={tx({
            es: 'Sin formularios largos ni vueltas. Todo se resuelve en una conversación por WhatsApp.',
            en: 'No long forms or back-and-forth. Everything is handled in one WhatsApp conversation.',
          })}
        />

        <div className="relative mt-14">
          <span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[3.5rem] hidden border-t-2 border-dashed border-teal-200 md:block" />
          <ol className="relative grid gap-6 md:grid-cols-4">
            {PASOS.map((paso, index) => {
              const Icono = iconos[index];
              return (
                <li
                  key={paso.titulo.es}
                  className="group relative rounded-3xl bg-page p-7 ring-1 ring-line transition-all duration-500 hover:-translate-y-1 hover:bg-surface hover:shadow-xl hover:shadow-brand-dark/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-teal-700 shadow-sm ring-1 ring-teal-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white">
                      <Icono className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-lg font-semibold text-ink-muted/60">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{tx(paso.titulo)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{tx(paso.descripcion)}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
