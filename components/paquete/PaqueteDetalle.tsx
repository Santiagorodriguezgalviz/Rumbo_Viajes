'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BookingCard } from '@/components/paquete/BookingCard';
import { IncludeList } from '@/components/paquete/IncludeList';
import { Itinerary } from '@/components/paquete/Itinerary';
import { PackageGallery } from '@/components/paquete/PackageGallery';
import { FaqList } from '@/components/site/FaqList';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { SectionHeading } from '@/components/site/SectionHeading';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import { PAQUETES, REGION_TEXTO, type Paquete } from '@/data/paquetes';
import { formatDuracion } from '@/lib/format';
import { BLUR_PLACEHOLDER } from '@/lib/images';
import { whatsappPaqueteUrl } from '@/lib/whatsapp';

export function PaqueteDetalle({ paquete }: { paquete: Paquete }) {
  const { locale, tx } = usePreferencias();
  const nombre = tx(paquete.nombre);
  const otros = PAQUETES.filter((p) => p.slug !== paquete.slug).slice(0, 3);
  const migas = [
    { nombre: tx({ es: 'Inicio', en: 'Home' }), path: '/' },
    { nombre: tx({ es: 'Destinos', en: 'Destinations' }), path: '/#destinos' },
    { nombre, path: `/paquetes/${paquete.slug}` },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
      <nav aria-label={tx({ es: 'Ruta de navegación', en: 'Breadcrumb' })} className="text-sm text-ink-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {migas.map((miga, index) => (
            <li key={miga.path} className="flex items-center gap-1.5">
              {index < migas.length - 1 ? (
                <>
                  <Link href={miga.path} className="transition-colors hover:text-teal-700">
                    {miga.nombre}
                  </Link>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </>
              ) : (
                <span aria-current="page" className="font-medium text-ink">
                  {miga.nombre}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <header className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
            {REGION_TEXTO[paquete.region][locale]}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl">
            {tx({ es: `Paquete a ${nombre}`, en: `Package to ${nombre}` })}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{tx(paquete.resumen)}</p>
        </div>
        <p className="shrink-0 text-sm font-medium text-ink-muted">
          {tx(paquete.pais)} · {formatDuracion(paquete.duracion, locale)}
        </p>
      </header>

      <div className="mt-10">
        <PackageGallery imagen={paquete.imagen} galeria={paquete.galeria} nombre={nombre} />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
        <div className="space-y-20">
          <section aria-labelledby="sobre-el-viaje">
            <h2 id="sobre-el-viaje" className="font-display text-3xl font-semibold tracking-tight text-ink">
              {tx({ es: 'Sobre este viaje', en: 'About this trip' })}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.7] text-ink-muted">
              {paquete.descripcion.map((parrafo) => (
                <p key={parrafo.es.slice(0, 32)}>{tx(parrafo)}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow={tx({ es: 'Itinerario', en: 'Itinerary' })}
              title={tx({
                es: `${paquete.itinerario.length} días, paso a paso`,
                en: `${paquete.itinerario.length} days, step by step`,
              })}
            />
            <div className="mt-10">
              <Itinerary dias={paquete.itinerario} />
            </div>
          </section>

          <section aria-labelledby="que-incluye" className="grid gap-6 md:grid-cols-2">
            <h2 id="que-incluye" className="sr-only">
              {tx({ es: 'Qué incluye el paquete', en: 'What the package includes' })}
            </h2>
            <IncludeList titulo={tx({ es: 'Qué incluye', en: 'What is included' })} items={paquete.incluye} tipo="incluye" />
            <IncludeList
              titulo={tx({ es: 'Qué no incluye', en: 'What is not included' })}
              items={paquete.noIncluye}
              tipo="noIncluye"
            />
          </section>

          <section>
            <SectionHeading
              eyebrow={tx({ es: 'Antes de viajar', en: 'Before you travel' })}
              title={tx({ es: 'Preguntas sobre este destino', en: 'Questions about this destination' })}
            />
            <div className="mt-10">
              <FaqList items={paquete.faqs} />
            </div>
          </section>
        </div>

        <div>
          <BookingCard paquete={paquete} />
        </div>
      </div>

      <section className="mt-24 rounded-[2rem] bg-brand-dark px-8 py-14 text-white sm:px-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {tx({ es: `¿Listo para tu viaje a ${nombre}?`, en: `Ready for your trip to ${nombre}?` })}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              {tx({
                es: 'Escríbenos por WhatsApp, cuéntanos tus fechas y recibe tu propuesta.',
                en: 'Message us on WhatsApp, tell us your dates and receive your proposal.',
              })}
            </p>
          </div>
          <WhatsAppButton href={whatsappPaqueteUrl(paquete, locale)}>
            {tx({ es: 'Pedir mi propuesta', en: 'Request my proposal' })}
          </WhatsAppButton>
        </div>
      </section>

      {otros.length > 0 && (
        <section aria-labelledby="otros-destinos" className="mt-24">
          <h2 id="otros-destinos" className="font-display text-2xl font-semibold text-ink">
            {tx({ es: 'También te puede interesar', en: 'You might also like' })}
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {otros.map((otro) => (
              <li key={otro.slug}>
                <Link
                  href={`/paquetes/${otro.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-surface p-3 pr-5 ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-dark/10"
                >
                  <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={otro.imagen.src}
                      alt={tx(otro.imagen.alt)}
                      fill
                      sizes="80px"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      className="object-cover"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-semibold text-ink">{tx(otro.nombre)}</span>
                    <span className="block text-sm text-ink-muted">{formatDuracion(otro.duracion, locale)}</span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal-600"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
