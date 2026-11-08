'use client';

import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { PAQUETES } from '@/data/paquetes';

const BANDERAS: Record<string, string> = {
  paris: 'fr',
  roma: 'it',
  cancun: 'mx',
  cartagena: 'co',
  'cusco-machu-picchu': 'pe',
  tokio: 'jp',
  bali: 'id',
  dubai: 'ae',
  'nueva-york': 'us',
};

export function DestinationMarquee() {
  const { tx } = usePreferencias();
  const destinos = PAQUETES.map((paquete) => ({
    slug: paquete.slug,
    nombre: tx(paquete.nombre),
    pais: tx(paquete.pais),
    bandera: BANDERAS[paquete.slug],
  }));

  return (
    <div className="marquee relative border-y border-line bg-surface" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-32" />
      <div className="marquee-track py-4">
        {[0, 1].map((copia) => (
          <div className="marquee-group" key={copia}>
            {destinos.map((destino, index) => (
              <span key={`${destino.slug}-${copia}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
                <span className="flex items-center gap-3 font-display text-2xl font-semibold text-ink/85">
                  <img
                    src={`/flags/${destino.bandera}.svg`}
                    alt=""
                    width={36}
                    height={24}
                    className="h-6 w-9 rounded-[4px] object-cover shadow-md ring-1 ring-black/15"
                  />
                  {destino.nombre}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-sun-500 shadow-[0_0_12px_rgb(245_174_27)]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
