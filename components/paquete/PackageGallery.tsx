'use client';

import Image from 'next/image';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import type { Foto } from '@/data/paquetes';
import { BLUR_PLACEHOLDER } from '@/lib/images';

export function PackageGallery({ imagen, galeria, nombre }: { imagen: Foto; galeria: Foto[]; nombre: string }) {
  const { tx } = usePreferencias();
  const fotos = [imagen, ...galeria];
  return (
    <div className="grid grid-cols-2 gap-3 md:h-[480px] md:grid-cols-4 md:grid-rows-2 md:gap-4">
      {fotos.map((foto, index) => (
        <figure
          key={foto.src}
          className={`group relative overflow-hidden rounded-2xl bg-line ${
            index === 0 ? 'col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto md:rounded-3xl' : 'aspect-[4/3] md:aspect-auto'
          }`}
        >
          <Image
            src={foto.src}
            alt={index === 0 ? tx(foto.alt) : `${tx(foto.alt)} (${nombre})`}
            fill
            sizes={index === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
          />
        </figure>
      ))}
    </div>
  );
}
