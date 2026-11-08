'use client';

import { usePreferencias } from '@/components/site/PreferenciasProvider';
import type { DiaItinerario } from '@/data/paquetes';

export function Itinerary({ dias }: { dias: DiaItinerario[] }) {
  const { tx } = usePreferencias();
  return (
    <ol className="relative">
      {dias.map((dia, index) => (
        <li key={dia.dia} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
          {index < dias.length - 1 && (
            <span aria-hidden="true" className="absolute left-5 top-12 h-[calc(100%-2.5rem)] w-px bg-line sm:left-6" />
          )}
          <span className="relative z-10 flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full bg-brand-dark text-white sm:h-12 sm:w-12">
            <span className="text-[10px] font-semibold uppercase leading-none tracking-wider text-white/80">
              {tx({ es: 'Día', en: 'Day' })}
            </span>
            <span className="font-display text-base font-semibold leading-none">{dia.dia}</span>
          </span>
          <div className="pt-1.5">
            <h3 className="font-display text-xl font-semibold text-ink">{tx(dia.titulo)}</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">{tx(dia.descripcion)}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
