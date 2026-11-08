'use client';

import Link from 'next/link';
import { Logo } from '@/components/site/Logo';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { FOTO_PAREJA, HERO_IMAGEN } from '@/data/contenido';
import { PAQUETES } from '@/data/paquetes';
import { SITE } from '@/lib/site';
import { whatsappGeneralUrl } from '@/lib/whatsapp';

export function SiteFooter() {
  const { locale, tx } = usePreferencias();
  const fotografos = Array.from(
    new Set(
      [
        HERO_IMAGEN,
        FOTO_PAREJA,
        ...PAQUETES.flatMap((paquete) => [paquete.imagen, ...paquete.galeria]),
      ].map((foto) => foto.fotografo),
    ),
  ).sort((a, b) => a.localeCompare(b, locale));

  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {tx({
              es: 'Agencia de viajes para quienes quieren conocer el mundo con un plan claro, buen ritmo y alguien que responda.',
              en: 'A travel agency for people who want to see the world with a clear plan, a good pace and someone who answers.',
            })}
          </p>
        </div>

        <nav aria-label={tx({ es: 'Destinos', en: 'Destinations' })} className="md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            {tx({ es: 'Destinos', en: 'Destinations' })}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {PAQUETES.map((paquete) => (
              <li key={paquete.slug}>
                <Link href={`/paquetes/${paquete.slug}`} className="transition-colors hover:text-sun-300">
                  {tx({ es: 'Paquete a', en: 'Package to' })} {tx(paquete.nombre)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            {tx({ es: 'Contacto', en: 'Contact' })}
          </h2>
          <a
            href={whatsappGeneralUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm transition-colors hover:text-sun-300"
          >
            {tx({ es: 'Escríbenos por WhatsApp', en: 'Message us on WhatsApp' })}
          </a>
          <p className="mt-3 text-sm text-white/75">
            {SITE.city}, {SITE.country}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-white/70 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            {tx({ es: 'Fotografías de', en: 'Photos by' })}{' '}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-sun-300"
            >
              Pexels
            </a>
            : {fotografos.join(', ')}.
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} {SITE.name}. {tx({ es: 'Todos los derechos reservados.', en: 'All rights reserved.' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
