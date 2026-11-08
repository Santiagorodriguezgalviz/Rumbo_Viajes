import { formatPrecio } from '@/lib/format';
import type { Precio } from '@/data/paquetes';
import { usePreferencias } from '@/components/site/PreferenciasProvider';

export function PrecioLabel({ precio }: { precio?: Precio }) {
  const { locale, tx } = usePreferencias();
  if (precio) {
    return (
      <span className="text-sm text-ink-muted">
        {tx({ es: 'Desde', en: 'From' })}{' '}
        <span className="font-semibold text-ink">{formatPrecio(precio, locale)}</span>
      </span>
    );
  }
  return (
    <span className="text-sm font-semibold text-ink">
      {tx({ es: 'Consulta tu precio por WhatsApp', en: 'Ask for your price on WhatsApp' })}
    </span>
  );
}
