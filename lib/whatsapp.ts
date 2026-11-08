import type { Bilingue, Locale } from '@/lib/preferencias';
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
  const mensaje =
    locale === 'en'
      ? `Hi, I'm interested in this ${nombre} package.`
      : `Hola, estoy interesado en este paquete a ${nombre}.`;
  return buildWhatsAppUrl(mensaje);
}

export function whatsappOtroUrl(locale: Locale) {
  const mensaje =
    locale === 'en' ? `Hi, I'm interested in another package.` : `Hola, estoy interesado en otro paquete.`;
  return buildWhatsAppUrl(mensaje);
}

export function whatsappGeneralUrl(locale: Locale) {
  const mensaje =
    locale === 'en'
      ? `Hi ${SITE.name}, I'd like to see the available destinations and request a travel proposal.`
      : `Hola ${SITE.name}, quiero conocer los destinos disponibles y pedir una propuesta de viaje.`;
  return buildWhatsAppUrl(mensaje);
}
