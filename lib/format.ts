import type { Duracion, Precio } from '@/data/paquetes';
import type { Locale } from '@/lib/preferencias';

export function formatDuracion({ dias, noches }: Duracion, locale: Locale) {
  if (locale === 'en') {
    const d = `${dias} ${dias === 1 ? 'day' : 'days'}`;
    const n = `${noches} ${noches === 1 ? 'night' : 'nights'}`;
    return `${d} / ${n}`;
  }
  const d = `${dias} ${dias === 1 ? 'día' : 'días'}`;
  const n = `${noches} ${noches === 1 ? 'noche' : 'noches'}`;
  return `${d} / ${n}`;
}

export function formatPrecio({ valor, moneda }: Precio, locale: Locale) {
  return new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'es-CO', {
    style: 'currency',
    currency: moneda,
    maximumFractionDigits: 0,
  }).format(valor);
}
