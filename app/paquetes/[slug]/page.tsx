import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PaqueteDetalle } from '@/components/paquete/PaqueteDetalle';
import { JsonLd } from '@/components/site/JsonLd';
import { getPaquete, PAQUETES } from '@/data/paquetes';
import { formatDuracion } from '@/lib/format';
import { breadcrumbJsonLd, faqJsonLd, touristTripJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return PAQUETES.map((paquete) => ({ slug: paquete.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const paquete = getPaquete(params.slug);
  if (!paquete) return {};

  const nombre = paquete.nombre.es;
  const titulo = `Paquete a ${nombre} desde Colombia`;
  const descripcion = `${paquete.resumen.es} ${formatDuracion(paquete.duracion, 'es')} con itinerario día por día. Pide tu propuesta por WhatsApp.`;
  const url = `/paquetes/${paquete.slug}`;

  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: url },
    openGraph: {
      title: `${titulo} | ${SITE.name}`,
      description: descripcion,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [{ url: paquete.imagen.src, alt: paquete.imagen.alt.es }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${titulo} | ${SITE.name}`,
      description: descripcion,
      images: [paquete.imagen.src],
    },
  };
}

export default function PaqueteDetallePage({ params }: Props) {
  const paquete = getPaquete(params.slug);
  if (!paquete) notFound();

  const migas = [
    { nombre: 'Inicio', path: '/' },
    { nombre: 'Destinos', path: '/#destinos' },
    { nombre: paquete.nombre.es, path: `/paquetes/${paquete.slug}` },
  ];

  return (
    <>
      <JsonLd data={touristTripJsonLd(paquete)} />
      <JsonLd data={breadcrumbJsonLd(migas)} />
      <JsonLd data={faqJsonLd(paquete.faqs)} />
      <PaqueteDetalle paquete={paquete} />
    </>
  );
}
