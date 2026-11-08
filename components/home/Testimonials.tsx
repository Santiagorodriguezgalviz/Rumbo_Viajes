'use client';

import { Quote, Star } from 'lucide-react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { SectionHeading } from '@/components/site/SectionHeading';
import { TESTIMONIOS } from '@/data/contenido';

export function Testimonials() {
  const { tx } = usePreferencias();
  return (
    <section className="bg-page py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={tx({ es: 'Testimonios', en: 'Testimonials' })}
          title={tx({ es: 'Lo que cuentan quienes ya viajaron', en: 'What travelers who already went say' })}
          description={tx({
            es: 'Historias reales de viajeros que confiaron en nosotros para su próximo destino.',
            en: 'Real stories from travelers who trusted us with their next destination.',
          })}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIOS.map((testimonio) => (
            <li
              key={testimonio.nombre}
              className="flex flex-col rounded-3xl bg-surface p-8 ring-1 ring-line transition-colors duration-500 hover:ring-teal-600/40"
            >
              <Quote className="h-8 w-8 text-teal-600" aria-hidden="true" />
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink">&ldquo;{tx(testimonio.texto)}&rdquo;</p>
              <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sun-300 font-semibold text-navy-900"
                >
                  {testimonio.nombre
                    .split(' ')
                    .map((parte) => parte[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <div>
                  <p className="font-semibold text-ink">{testimonio.nombre}</p>
                  <p className="text-sm text-ink-muted">
                    {testimonio.ciudad} · {tx({ es: 'viajó a', en: 'traveled to' })} {tx(testimonio.destino)}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5" aria-label={tx({ es: 'Calificación de 5 estrellas', en: '5-star rating' })}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-sun-300 text-sun-300" aria-hidden="true" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
