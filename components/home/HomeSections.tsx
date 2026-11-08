'use client';

import { DestinationGrid } from '@/components/home/DestinationGrid';
import { DestinationMarquee } from '@/components/home/DestinationMarquee';
import { FinalCta } from '@/components/home/FinalCta';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/home/Testimonials';
import { WhyUs } from '@/components/home/WhyUs';
import { FaqList } from '@/components/site/FaqList';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { Reveal } from '@/components/site/Reveal';
import { SectionHeading } from '@/components/site/SectionHeading';
import { FAQ_INICIO } from '@/data/contenido';
import { PAQUETES } from '@/data/paquetes';

export function HomeSections() {
  const { tx } = usePreferencias();
  return (
    <main>
      <Hero />
      <DestinationMarquee />

      <section id="destinos" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow={tx({ es: 'Destinos', en: 'Destinations' })}
              title={tx({ es: 'Elige el lugar que te llama', en: 'Pick the place that calls you' })}
              description={tx({
                es: 'Filtra por región y abre cada destino para ver el itinerario, lo que incluye y cómo pedir tu propuesta.',
                en: 'Filter by region and open each destination to see the itinerary, what is included and how to request your proposal.',
              })}
            />
          </Reveal>
          <Reveal className="mt-12">
            <DestinationGrid paquetes={PAQUETES} />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <WhyUs />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>

      <section id="preguntas" className="scroll-mt-20 py-20 sm:py-28">
        <Reveal className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading
            eyebrow={tx({ es: 'Preguntas frecuentes', en: 'Frequently asked questions' })}
            title={tx({ es: 'Lo que más nos preguntan antes de viajar', en: 'What people ask us most before traveling' })}
          />
          <FaqList items={FAQ_INICIO} />
        </Reveal>
      </section>

      <Reveal>
        <FinalCta />
      </Reveal>
    </main>
  );
}
