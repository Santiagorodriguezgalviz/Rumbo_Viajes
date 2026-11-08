import type { Bilingue } from '@/lib/preferencias';
import { formatDuracion } from '@/lib/format';
import type { Locale } from '@/lib/preferencias';
import { SITE } from '@/lib/site';

/** WhatsApp de la agencia, con indicativo de Colombia. */
export const WHATSAPP_NUMERO = '573053873453';

/** Cómo se muestra el número para llamar o escribir. */
export const TELEFONO_VISIBLE = '305 387 3453';

export function buildWhatsAppUrl(mensaje?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMERO}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export function whatsappPaqueteUrl(
  paquete: { nombre: Bilingue; duracion: { dias: number; noches: number } },
  locale: Locale,
) {
  const nombre = paquete.nombre[locale];
  const duracion = formatDuracion(paquete.duracion, locale);
  const mensaje =
    locale === 'en'
      ? `Hi ${SITE.name}, I'd like the ${nombre} package (${duracion}). Could you send me a proposal?`
      : `Hola ${SITE.name}, quiero el paquete a ${nombre} (${duracion}). ¿Me envían mi propuesta?`;
  return buildWhatsAppUrl(mensaje);
}

export function whatsappGeneralUrl(locale: Locale) {
  const mensaje =
    locale === 'en'
      ? `Hi ${SITE.name}, I'd like to see the available destinations and request a travel proposal.`
      : `Hola ${SITE.name}, quiero conocer los destinos disponibles y pedir una propuesta de viaje.`;
  return buildWhatsAppUrl(mensaje);
}
