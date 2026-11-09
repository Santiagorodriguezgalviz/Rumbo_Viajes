import type { Bilingue, Locale } from '@/lib/preferencias';
import { absoluteUrl, SITE } from '@/lib/site';

/** WhatsApp de la agencia, con indicativo de Polonia. */
export const WHATSAPP_NUMERO = '48503644658';

/** Cómo se muestra el número para llamar o escribir. */
export const TELEFONO_VISIBLE = '+48 503 644 658';

export function buildWhatsAppUrl(mensaje?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMERO}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

/** Ficha del paquete en el sitio publicado. */
export function urlPaginaPaquete(slug: string) {
  return absoluteUrl(`/paquetes/${slug}`);
}

export function mensajePaquete(paquete: { nombre: Bilingue; slug: string }, locale: Locale) {
  const nombre = paquete.nombre[locale];
  const url = urlPaginaPaquete(paquete.slug);
  return locale === 'en'
    ? `Hi, I'm interested in this ${nombre} package.\n\n${url}`
    : `Hola, estoy interesado en este paquete a ${nombre}.\n\n${url}`;
}

export function whatsappPaqueteUrl(paquete: { nombre: Bilingue; slug: string }, locale: Locale) {
  return buildWhatsAppUrl(mensajePaquete(paquete, locale));
}

export function whatsappOtroUrl(locale: Locale) {
  const url = absoluteUrl('/');
  const mensaje =
    locale === 'en'
      ? `Hi, I'm interested in another package.\n\n${url}`
      : `Hola, estoy interesado en otro paquete.\n\n${url}`;
  return buildWhatsAppUrl(mensaje);
}

export function whatsappGeneralUrl(locale: Locale) {
  const mensaje =
    locale === 'en'
      ? `Hi ${SITE.name}, I'd like to see the available destinations and request a travel proposal.`
      : `Hola ${SITE.name}, quiero conocer los destinos disponibles y pedir una propuesta de viaje.`;
  return buildWhatsAppUrl(mensaje);
}
