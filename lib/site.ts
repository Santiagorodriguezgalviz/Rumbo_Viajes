export const SITE = {
  name: 'Safari Mundi',
  url: 'https://viajaconmanuel.vercel.app',
  locale: 'es_CO',
  city: 'Bogotá',
  country: 'Colombia',
  description:
    'Paquetes turísticos a los destinos más deseados del mundo, diseñados para viajeros desde Colombia y Latinoamérica.',
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}
