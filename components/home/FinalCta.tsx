'use client';

import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import { whatsappGeneralUrl } from '@/lib/whatsapp';

export function FinalCta() {
  const { locale, tx } = usePreferencias();
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-dark px-8 py-16 text-white sm:px-16 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-sun-400/15 blur-3xl" />

        <div className="relative max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sun-300">
            {tx({ es: 'Hablemos', en: "Let's talk" })}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl">
            {tx({
              es: 'Cuéntanos a dónde quieres ir y armamos el resto',
              en: 'Tell us where you want to go and we will handle the rest',
            })}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            {tx({
              es: 'Escríbenos por WhatsApp con tu destino y tus fechas. Te respondemos con una propuesta clara, sin compromiso.',
              en: 'Message us on WhatsApp with your destination and dates. We reply with a clear proposal, with no commitment.',
            })}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton href={whatsappGeneralUrl(locale)}>
              {tx({ es: 'Pedir mi propuesta', en: 'Request my proposal' })}
            </WhatsAppButton>
            <a
              href="#destinos"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/40 px-7 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {tx({ es: 'Ver destinos', en: 'See destinations' })}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
