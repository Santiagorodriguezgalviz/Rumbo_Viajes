'use client';

import { MessageCircle } from 'lucide-react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { TELEFONO_VISIBLE, whatsappGeneralUrl } from '@/lib/whatsapp';

export function WhatsAppFloat() {
  const { locale, tx } = usePreferencias();
  const etiqueta = tx({ es: 'Escríbenos por WhatsApp', en: 'Message us on WhatsApp' });
  return (
    <a
      href={whatsappGeneralUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={etiqueta}
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <span className="hidden translate-x-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        {TELEFONO_VISIBLE}
      </span>
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-navy-900 shadow-xl shadow-black/20 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
        <span className="absolute inset-0 rounded-full bg-whatsapp motion-safe:animate-ping motion-safe:opacity-40" aria-hidden="true" />
        <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </span>
    </a>
  );
}
