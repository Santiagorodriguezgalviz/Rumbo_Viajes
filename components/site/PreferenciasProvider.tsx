'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  LOCALE_KEY,
  TEMA_KEY,
  esLocale,
  esTema,
  type Bilingue,
  type Locale,
  type Tema,
} from '@/lib/preferencias';

type Preferencias = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  tema: Tema;
  setTema: (tema: Tema) => void;
  tx: (texto: Bilingue) => string;
};

const PreferenciasContext = createContext<Preferencias | null>(null);

export function PreferenciasProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [tema, setTemaState] = useState<Tema>('claro');

  useEffect(() => {
    const idioma = localStorage.getItem(LOCALE_KEY);
    const temaGuardado = localStorage.getItem(TEMA_KEY);
    if (esLocale(idioma)) setLocaleState(idioma);
    if (esTema(temaGuardado)) setTemaState(temaGuardado);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
  }, [tema]);

  const setLocale = useCallback((nuevo: Locale) => {
    setLocaleState(nuevo);
    localStorage.setItem(LOCALE_KEY, nuevo);
  }, []);

  const setTema = useCallback((nuevo: Tema) => {
    setTemaState(nuevo);
    localStorage.setItem(TEMA_KEY, nuevo);
  }, []);

  const valor = useMemo<Preferencias>(
    () => ({
      locale,
      setLocale,
      tema,
      setTema,
      tx: (texto) => texto[locale],
    }),
    [locale, setLocale, tema, setTema],
  );

  return <PreferenciasContext.Provider value={valor}>{children}</PreferenciasContext.Provider>;
}

export function usePreferencias() {
  const contexto = useContext(PreferenciasContext);
  if (!contexto) throw new Error('usePreferencias debe usarse dentro de PreferenciasProvider');
  return contexto;
}
