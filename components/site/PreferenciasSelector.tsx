'use client';

import { usePreferencias } from '@/components/site/PreferenciasProvider';
import { LOCALES, TEMAS } from '@/lib/preferencias';

export function PreferenciasSelector({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const { locale, setLocale, tema, setTema, tx } = usePreferencias();
  const boton = size === 'md' ? 'min-h-11 px-4 text-sm' : 'px-2.5 py-1 text-xs';

  return (
    <div className="flex items-center gap-2">
      <div
        role="group"
        aria-label={tx({ es: 'Idioma', en: 'Language' })}
        className="inline-flex items-center rounded-full border border-line bg-surface p-0.5"
      >
        {LOCALES.map((opcion) => {
          const activo = opcion.codigo === locale;
          return (
            <button
              key={opcion.codigo}
              type="button"
              aria-pressed={activo}
              onClick={() => setLocale(opcion.codigo)}
              className={`rounded-full font-semibold transition-colors duration-200 ${boton} ${
                activo ? 'bg-brand-dark text-white' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {opcion.etiqueta}
            </button>
          );
        })}
      </div>

      <div
        role="group"
        aria-label={tx({ es: 'Tema de color', en: 'Color theme' })}
        className="inline-flex items-center rounded-full border border-line bg-surface p-0.5"
      >
        {TEMAS.map((opcion) => {
          const activo = opcion.codigo === tema;
          return (
            <button
              key={opcion.codigo}
              type="button"
              aria-pressed={activo}
              onClick={() => setTema(opcion.codigo)}
              className={`rounded-full font-semibold transition-colors duration-200 ${boton} ${
                activo ? 'bg-brand-dark text-white' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tx({ es: opcion.es, en: opcion.en })}
            </button>
          );
        })}
      </div>
    </div>
  );
}
