'use client';

import { Check, X } from 'lucide-react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import type { Bilingue } from '@/lib/preferencias';

type Props = {
  titulo: string;
  items: Bilingue[];
  tipo: 'incluye' | 'noIncluye';
};

export function IncludeList({ titulo, items, tipo }: Props) {
  const { tx } = usePreferencias();
  const incluye = tipo === 'incluye';
  return (
    <div className="rounded-3xl bg-surface p-8 ring-1 ring-line">
      <h3 className="font-display text-2xl font-semibold text-ink">{titulo}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.es} className="flex items-start gap-3 text-base leading-relaxed text-ink-muted">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                incluye ? 'bg-teal-50 text-teal-700' : 'bg-page text-ink-muted'
              }`}
            >
              {incluye ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <X className="h-3.5 w-3.5" aria-hidden="true" />}
            </span>
            <span>{tx(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
