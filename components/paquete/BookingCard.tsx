'use client';

import { CalendarDays, MapPin, ShieldCheck } from 'lucide-react';
import { PrecioLabel } from '@/components/site/PrecioLabel';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { WhatsAppPaqueteButton } from '@/components/paquete/WhatsAppPaqueteButton';
import { REGION_TEXTO, type Paquete } from '@/data/paquetes';
import { formatDuracion } from '@/lib/format';

export function BookingCard({ paquete }: { paquete: Paquete }) {
  const { locale, tx } = usePreferencias();
  return (
    <aside className="rounded-3xl bg-surface p-7 shadow-xl shadow-brand-dark/10 ring-1 ring-line lg:sticky lg:top-28">
      <p className="text-sm font-medium text-ink-muted">
        {tx({ es: `Tu viaje a ${paquete.nombre.es}`, en: `Your trip to ${paquete.nombre.en}` })}
      </p>
      <div className="mt-3">
        <PrecioLabel precio={paquete.precio} />
      </div>

      <ul className="mt-6 space-y-4 border-t border-line pt-6 text-sm text-ink">
        <li className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-teal-600" aria-hidden="true" />
          {formatDuracion(paquete.duracion, locale)}
        </li>
        <li className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-teal-600" aria-hidden="true" />
          {tx(paquete.pais)} · {REGION_TEXTO[paquete.region][locale]}
        </li>
      </ul>

      <WhatsAppPaqueteButton paquete={paquete} className="mt-8 w-full">
        {tx({ es: 'Quiero este viaje', en: 'I want this trip' })}
      </WhatsAppPaqueteButton>

      <p className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-ink-muted">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
        {tx({
          es: 'Te respondemos por WhatsApp con una propuesta clara y sin compromiso.',
          en: 'We reply on WhatsApp with a clear proposal, no commitment.',
        })}
      </p>
    </aside>
  );
}
