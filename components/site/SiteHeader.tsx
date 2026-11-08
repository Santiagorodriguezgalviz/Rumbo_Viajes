'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Logo } from '@/components/site/Logo';
import { PreferenciasSelector } from '@/components/site/PreferenciasSelector';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import { whatsappGeneralUrl } from '@/lib/whatsapp';

const ENLACE = 'text-sm font-medium text-ink-muted transition-colors hover:text-teal-600';

export function SiteHeader() {
  const { locale, tx } = usePreferencias();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const whatsapp = whatsappGeneralUrl(locale);
  const cerrar = () => setMenuAbierto(false);
  const enlaces = [
    { href: '/#destinos', es: 'Destinos', en: 'Destinations' },
    { href: '/#como-funciona', es: 'Cómo funciona', en: 'How it works' },
    { href: '/#preguntas', es: 'Preguntas', en: 'Questions' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-md">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        {tx({ es: 'Saltar al contenido', en: 'Skip to content' })}
      </a>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Logo />
        <nav aria-label={tx({ es: 'Principal', en: 'Main' })} className="hidden items-center gap-8 md:flex">
          {enlaces.map((enlace) => (
            <Link key={enlace.href} href={enlace.href} className={ENLACE}>
              {tx({ es: enlace.es, en: enlace.en })}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <PreferenciasSelector />
          <WhatsAppButton href={whatsapp} size="sm">
            {tx({ es: 'Pedir mi propuesta', en: 'Request my proposal' })}
          </WhatsAppButton>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tx({ es: 'Escribir por WhatsApp', en: 'Message on WhatsApp' })}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp text-navy-900"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
          >
            {menuAbierto ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{tx({ es: 'Abrir menú', en: 'Open menu' })}</span>
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div id="menu-movil" className="border-t border-line px-4 py-4 md:hidden">
          <nav aria-label={tx({ es: 'Principal', en: 'Main' })} className="grid">
            {enlaces.map((enlace) => (
              <Link
                key={enlace.href}
                href={enlace.href}
                onClick={cerrar}
                className="rounded-xl px-2 py-3 text-base font-medium text-ink"
              >
                {tx({ es: enlace.es, en: enlace.en })}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-line pt-4">
            <PreferenciasSelector size="md" />
          </div>
        </div>
      )}
    </header>
  );
}
