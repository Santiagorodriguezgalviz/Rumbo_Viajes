export const SITE = {
  name: 'Rumbo Viajes',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'es_CO',
  city: 'Bogotá',
  country: 'Colombia',
  description:
    'Paquetes turísticos a los destinos más deseados del mundo, diseñados para viajeros desde Colombia y Latinoamérica.',
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}
