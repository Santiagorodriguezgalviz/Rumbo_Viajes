'use client';

import Image from 'next/image';
import { CalendarDays, Hotel, Plane } from 'lucide-react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import { HERO_IMAGEN } from '@/data/contenido';
import { BLUR_PLACEHOLDER } from '@/lib/images';
import { whatsappGeneralUrl } from '@/lib/whatsapp';

const chips = [
  { icono: Plane, texto: { es: 'Vuelos cotizados a medida', en: 'Flights quoted to fit you' } },
  { icono: Hotel, texto: { es: 'Hoteles seleccionados', en: 'Handpicked hotels' } },
  { icono: CalendarDays, texto: { es: 'Fechas flexibles', en: 'Flexible dates' } },
];

export function Hero() {
  const { locale, tx } = usePreferencias();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-end overflow-hidden bg-brand-dark text-white sm:min-h-[720px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src={HERO_IMAGEN.src}
            alt={tx(HERO_IMAGEN.alt)}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/15" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/80 via-brand-dark/30 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-24 sm:pt-32">
        <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-sun-300 opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sun-400" />
          </span>
          {tx({ es: 'Viajes desde Colombia y Latinoamérica', en: 'Trips from Colombia and Latin America' })}
        </p>
        <h1
          className="animate-fade-up mt-4 max-w-3xl font-display text-[2rem] font-semibold leading-[1.12] tracking-tight sm:mt-6 sm:text-6xl sm:leading-[1.08] lg:text-7xl"
          style={{ animationDelay: '100ms' }}
        >
          {tx({ es: 'Tu próximo destino empieza con una conversación', en: 'Your next destination starts with a conversation' })}
        </h1>
        <p
          className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg"
          style={{ animationDelay: '200ms' }}
        >
          {tx({
            es: 'Paquetes a Europa, el Caribe, Asia y más, con itinerarios claros y un asesor en español que te acompaña desde tu primera pregunta.',
            en: 'Packages to Europe, the Caribbean, Asia and beyond, with clear itineraries and a Spanish-speaking advisor who supports you from your first question.',
          })}
        </p>

        <div className="animate-fade-up mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center" style={{ animationDelay: '300ms' }}>
          <WhatsAppButton href={whatsappGeneralUrl(locale)} className="w-full sm:w-auto">
            {tx({ es: 'Pedir mi propuesta', en: 'Request my proposal' })}
          </WhatsAppButton>
          <a
            href="#destinos"
            className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:w-auto"
          >
            {tx({ es: 'Explorar destinos', en: 'Explore destinations' })}
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true">
              &darr;
            </span>
          </a>
        </div>

        <ul className="animate-fade-up mt-6 flex flex-wrap gap-2 sm:mt-12 sm:gap-3" style={{ animationDelay: '400ms' }}>
          {chips.map(({ icono: Icono, texto }) => (
            <li
              key={texto.es}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-brand-dark/40 px-4 py-2 text-sm backdrop-blur-md"
            >
              <Icono className="h-4 w-4 text-sun-300" aria-hidden="true" />
              {tx(texto)}
            </li>
          ))}
        </ul>
      </div>

      <p className="absolute bottom-4 right-4 hidden text-xs text-white/80 sm:block">
        {tx({ es: 'Foto', en: 'Photo' })}: {HERO_IMAGEN.fotografo} / Pexels
      </p>
    </section>
  );
}
