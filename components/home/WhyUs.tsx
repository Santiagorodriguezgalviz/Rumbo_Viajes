'use client';

import Image from 'next/image';
import { Compass, Headset, MessageCircle, ShieldCheck, Wallet } from 'lucide-react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { SectionHeading } from '@/components/site/SectionHeading';
import { FOTO_PAREJA, MOTIVOS } from '@/data/contenido';
import { BLUR_PLACEHOLDER } from '@/lib/images';

const iconos = [MessageCircle, Compass, Wallet, Headset];

export function WhyUs() {
  const { tx } = usePreferencias();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={FOTO_PAREJA.src}
              alt={tx(FOTO_PAREJA.alt)}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-xl shadow-brand-dark/10 sm:left-auto sm:right-8 sm:w-80">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sun-100 text-navy-900">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="text-sm leading-snug text-ink-muted">
              <span className="block font-semibold text-ink">
                {tx({ es: 'Tu viaje, en buenas manos', en: 'Your trip, in good hands' })}
              </span>
              {tx({
                es: 'Cada reserva se confirma por escrito antes de pagar.',
                en: 'Every booking is confirmed in writing before you pay.',
              })}
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={tx({ es: 'Por qué elegirnos', en: 'Why choose us' })}
            title={tx({ es: 'Viajar bien también es sentirte acompañado', en: 'Traveling well also means feeling supported' })}
            description={tx({
              es: 'Somos una agencia pensada para viajeros que quieren disfrutar sin dedicar semanas a planear.',
              en: 'We are an agency built for travelers who want to enjoy the trip without spending weeks planning it.',
            })}
          />
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {MOTIVOS.map((motivo, index) => {
              const Icono = iconos[index];
              return (
                <li key={motivo.titulo.es} className="group">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-100">
                    <Icono className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{tx(motivo.titulo)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{tx(motivo.descripcion)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
