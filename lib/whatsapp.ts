import type { Bilingue } from '@/lib/preferencias';
import { formatDuracion } from '@/lib/format';
import type { Locale } from '@/lib/preferencias';
import { SITE } from '@/lib/site';

const NUMERO = process.env.NEXT_PUBLIC_WHATSAPP;

export function buildWhatsAppUrl(mensaje?: string) {
  const base = `https://wa.me/${NUMERO}`;
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
