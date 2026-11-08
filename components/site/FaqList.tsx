'use client';

import { ChevronDown } from 'lucide-react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import type { Faq } from '@/data/paquetes';

export function FaqList({ items }: { items: Faq[] }) {
  const { tx } = usePreferencias();
  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
      {items.map((item) => (
        <details key={item.pregunta.es} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-semibold text-ink transition-colors hover:bg-page sm:px-8 [&::-webkit-details-marker]:hidden">
            <span>{tx(item.pregunta)}</span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-transform duration-300 group-open:rotate-180">
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="px-6 pb-6 text-base leading-relaxed text-ink-muted sm:px-8">{tx(item.respuesta)}</p>
        </details>
      ))}
    </div>
  );
}
