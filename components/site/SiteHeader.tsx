'use client';

import Link from 'next/link';
import { Logo } from '@/components/site/Logo';
import { PreferenciasSelector } from '@/components/site/PreferenciasSelector';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import { whatsappGeneralUrl } from '@/lib/whatsapp';

const ENLACE = 'text-sm font-medium text-ink-muted transition-colors hover:text-teal-600';

export function SiteHeader() {
  const { locale, tx } = usePreferencias();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur-md">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        {tx({ es: 'Saltar al contenido', en: 'Skip to content' })}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav aria-label={tx({ es: 'Principal', en: 'Main' })} className="hidden items-center gap-8 lg:flex">
          <Link href="/#destinos" className={ENLACE}>
            {tx({ es: 'Destinos', en: 'Destinations' })}
          </Link>
          <Link href="/#como-funciona" className={ENLACE}>
            {tx({ es: 'Cómo funciona', en: 'How it works' })}
          </Link>
          <Link href="/#preguntas" className={ENLACE}>
            {tx({ es: 'Preguntas', en: 'Questions' })}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <PreferenciasSelector />
          </div>
          <WhatsAppButton href={whatsappGeneralUrl(locale)} size="sm">
            {tx({ es: 'Pedir mi propuesta', en: 'Request my proposal' })}
          </WhatsAppButton>
        </div>
      </div>
      <div className="flex justify-center border-t border-line px-4 py-2 md:hidden">
        <PreferenciasSelector />
      </div>
    </header>
  );
}
