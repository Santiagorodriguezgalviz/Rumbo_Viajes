'use client';

import { useEffect, useState } from 'react';
import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import type { Paquete } from '@/data/paquetes';
import { mensajePaquete, whatsappPaqueteUrl } from '@/lib/whatsapp';
import { SITE } from '@/lib/site';

type Props = {
  paquete: Paquete;
  children: React.ReactNode;
  className?: string;
};

export function WhatsAppPaqueteButton({ paquete, children, className }: Props) {
  const { locale } = usePreferencias();
  const [origen, setOrigen] = useState(SITE.url);

  useEffect(() => {
    setOrigen(window.location.origin);
  }, []);

  const href = whatsappPaqueteUrl(paquete, locale, origen);

  async function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const movil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!movil || !navigator.share) return;

    event.preventDefault();
    const texto = mensajePaquete(paquete, locale, window.location.origin);
    try {
      const respuesta = await fetch(paquete.imagen.src);
      const blob = await respuesta.blob();
      const archivo = new File([blob], `${paquete.slug}.jpg`, { type: blob.type || 'image/jpeg' });
      const datos = { files: [archivo], text: texto };
      if (!navigator.canShare?.(datos)) {
        window.open(href, '_blank', 'noopener,noreferrer');
        return;
      }
      await navigator.share(datos);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <WhatsAppButton href={href} onClick={onClick} className={className}>
      {children}
    </WhatsAppButton>
  );
}
