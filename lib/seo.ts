import type { Faq, Paquete } from '@/data/paquetes';
import { absoluteUrl, SITE } from '@/lib/site';

export function travelAgencyJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    areaServed: ['Colombia', 'Latinoamérica'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressCountry: 'CO',
    },
    knowsLanguage: 'es',
  };
}

export function touristTripJsonLd(paquete: Paquete) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `Paquete a ${paquete.nombre.es}`,
    description: paquete.resumen.es,
    url: absoluteUrl(`/paquetes/${paquete.slug}`),
    image: paquete.imagen.src,
    touristType: 'Viajeros desde Colombia y Latinoamérica',
    itinerary: paquete.itinerario.map((dia) => ({
      '@type': 'ItemList',
      name: `Día ${dia.dia}: ${dia.titulo.es}`,
      description: dia.descripcion.es,
    })),
    provider: {
      '@type': 'TravelAgency',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function breadcrumbJsonLd(items: { nombre: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.nombre,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.pregunta.es,
      acceptedAnswer: { '@type': 'Answer', text: faq.respuesta.es },
    })),
  };
}
