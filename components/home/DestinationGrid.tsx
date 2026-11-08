'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MessageCircle } from 'lucide-react';
import { PrecioLabel } from '@/components/site/PrecioLabel';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { REGIONES, REGION_TEXTO, type Paquete, type Region } from '@/data/paquetes';
import { BLUR_PLACEHOLDER } from '@/lib/images';
import { formatDuracion } from '@/lib/format';
import { whatsappOtroUrl } from '@/lib/whatsapp';

type Filtro = Region | 'Todos';

const OTROS_FOTOS = [
  {
    src: '/fotos/destinos/1010657.jpg',
    alt: { es: 'Casas blancas y cúpulas azules de Santorini', en: 'White houses and blue domes in Santorini' },
  },
  {
    src: '/fotos/destinos/460672.jpg',
    alt: { es: 'Big Ben y el Parlamento de Londres al atardecer', en: 'Big Ben and the Houses of Parliament in London at sunset' },
  },
  {
    src: '/fotos/destinos/2387873.jpg',
    alt: { es: 'Cascada entre rocas rojas en Islandia', en: 'Waterfall between red rocks in Iceland' },
  },
  {
    src: '/fotos/destinos/71241.jpg',
    alt: { es: 'Pirámides de Guiza en el desierto de Egipto', en: 'Pyramids of Giza in the Egyptian desert' },
  },
];

export function DestinationGrid({ paquetes }: { paquetes: Paquete[] }) {
  const { locale, tx } = usePreferencias();
  const [filtro, setFiltro] = useState<Filtro>('Todos');
  const visibles = filtro === 'Todos' ? paquetes : paquetes.filter((p) => p.region === filtro);
  const regiones = REGIONES.filter((region) => paquetes.some((p) => p.region === region));

  return (
    <div>
      <div
        role="group"
        aria-label={tx({ es: 'Filtrar destinos por región', en: 'Filter destinations by region' })}
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {(['Todos', ...regiones] as Filtro[]).map((region) => {
          const activo = filtro === region;
          const cantidad = region === 'Todos' ? paquetes.length : paquetes.filter((p) => p.region === region).length;
          const etiqueta = region === 'Todos' ? tx({ es: 'Todos', en: 'All' }) : REGION_TEXTO[region][locale];
          return (
            <button
              key={region}
              type="button"
              aria-pressed={activo}
              onClick={() => setFiltro(region)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activo
                  ? 'border-brand-dark bg-brand-dark text-white shadow-md shadow-brand-dark/15'
                  : 'border-line bg-surface text-ink-muted hover:border-teal-500 hover:text-teal-700'
              }`}
            >
              {etiqueta} <span className={activo ? 'text-white/70' : 'text-ink-muted/70'}>({cantidad})</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {visibles.map((paquete, index) => (
          <li key={paquete.slug} className="animate-fade-up" style={{ animationDelay: `${Math.min(index, 5) * 60}ms` }}>
            <Link href={`/paquetes/${paquete.slug}`} className="group block h-full rounded-3xl focus-visible:ring-offset-4">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-surface ring-1 ring-line transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-dark/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={paquete.imagen.src}
                    alt={tx(paquete.imagen.alt)}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink shadow-sm">
                    {REGION_TEXTO[paquete.region][locale]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-medium text-teal-700">{tx(paquete.pais)}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">{tx(paquete.nombre)}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">{tx(paquete.resumen)}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
                    <Clock className="h-4 w-4 text-teal-600" aria-hidden="true" />
                    {formatDuracion(paquete.duracion, locale)}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
                      <PrecioLabel precio={paquete.precio} />
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-page text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:bg-sun-300 group-hover:text-navy-900">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </li>
        ))}
        <li>
          <a
            href={whatsappOtroUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-3xl focus-visible:ring-offset-4"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-surface text-ink ring-1 ring-line transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-dark/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  {OTROS_FOTOS.map((foto) => (
                    <div key={foto.src} className="relative overflow-hidden">
                      <Image
                        src={foto.src}
                        alt={tx(foto.alt)}
                        fill
                        sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
                        placeholder="blur"
                        blurDataURL={BLUR_PLACEHOLDER}
                        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink shadow-sm">
                  <img src="/flags/co.svg" alt="" width={20} height={14} className="h-3.5 w-5 rounded-[2px] object-cover" />
                  {tx({ es: 'A tu medida', en: 'Made for you' })}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium text-teal-700">{tx({ es: 'Cualquier destino', en: 'Any destination' })}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">{tx({ es: 'Otros', en: 'Other' })}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {tx({
                    es: 'Si tu destino no está en la lista, escríbenos y armamos ese paquete.',
                    en: 'If your destination is not on the list, message us and we will build that package.',
                  })}
                </p>
                <div className="mt-auto pt-8">
                  <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
                      <MessageCircle className="h-4 w-4 text-teal-600" aria-hidden="true" />
                      {tx({ es: 'Pedir otro paquete', en: 'Ask for another package' })}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-page text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:bg-sun-300 group-hover:text-navy-900">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </div>
  );
}
