import type { MetadataRoute } from 'next';
import { PAQUETES } from '@/data/paquetes';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  return [
    { url: absoluteUrl('/'), lastModified: ahora, changeFrequency: 'weekly', priority: 1 },
    ...PAQUETES.map((paquete) => ({
      url: absoluteUrl(`/paquetes/${paquete.slug}`),
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
