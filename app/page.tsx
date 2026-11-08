import type { Metadata } from 'next';
import { HomeSections } from '@/components/home/HomeSections';
import { JsonLd } from '@/components/site/JsonLd';
import { FAQ_INICIO } from '@/data/contenido';
import { faqJsonLd, travelAgencyJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site';

const titulo = 'Paquetes turísticos desde Colombia a Europa, Caribe, Asia y más';
const descripcion =
  'Viajes a París, Roma, Cancún, Cartagena, Machu Picchu, Tokio, Bali, Dubái y Nueva York. Itinerarios claros y propuesta por WhatsApp.';

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${titulo} | ${SITE.name}`,
    description: descripcion,
    url: '/',
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${titulo} | ${SITE.name}`,
    description: descripcion,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={travelAgencyJsonLd()} />
      <JsonLd data={faqJsonLd(FAQ_INICIO)} />
      <HomeSections />
    </>
  );
}
