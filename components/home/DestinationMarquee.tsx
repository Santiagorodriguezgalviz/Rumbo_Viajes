'use client';

import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { PAQUETES } from '@/data/paquetes';

export function DestinationMarquee() {
  const { tx } = usePreferencias();
  const nombres = [...PAQUETES.map((p) => tx(p.nombre)), ...PAQUETES.map((p) => tx(p.nombre))];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {nombres.map((nombre, index) => (
          <span key={`${nombre}-${index}`} className="flex items-center gap-10 font-display text-2xl font-semibold text-ink/80">
            {nombre}
            <span className="h-2 w-2 rounded-full bg-sun-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
