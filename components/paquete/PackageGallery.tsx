'use client';

import Image from 'next/image';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import type { Foto } from '@/data/paquetes';
import { BLUR_PLACEHOLDER } from '@/lib/images';

export function PackageGallery({ imagen, galeria, nombre }: { imagen: Foto; galeria: Foto[]; nombre: string }) {
  const { tx } = usePreferencias();
  const fotos = [imagen, ...galeria];
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:h-[480px] md:grid-cols-4 md:grid-rows-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
      {fotos.map((foto, index) => (
        <figure
          key={foto.src}
          className={`group relative shrink-0 snap-center overflow-hidden rounded-2xl bg-line ${
            index === 0
              ? 'aspect-[16/10] w-[86%] md:col-span-2 md:row-span-2 md:aspect-auto md:w-auto md:rounded-3xl'
              : 'aspect-[4/3] w-[68%] md:aspect-auto md:w-auto'
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
