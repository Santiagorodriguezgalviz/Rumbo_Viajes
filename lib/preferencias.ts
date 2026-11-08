export type Locale = 'es' | 'en';
export type Bilingue = { es: string; en: string };
export type Tema = 'claro' | 'oscuro' | 'azul';

export const LOCALES: { codigo: Locale; etiqueta: string }[] = [
  { codigo: 'es', etiqueta: 'ES' },
  { codigo: 'en', etiqueta: 'EN' },
];

export const TEMAS: { codigo: Tema; es: string; en: string }[] = [
  { codigo: 'claro', es: 'Claro', en: 'Light' },
  { codigo: 'oscuro', es: 'Oscuro', en: 'Dark' },
  { codigo: 'azul', es: 'Azul', en: 'Blue' },
];

export const LOCALE_KEY = 'rumbo-idioma';
export const TEMA_KEY = 'rumbo-tema';

export function esTema(valor: string | null): valor is Tema {
  return TEMAS.some((tema) => tema.codigo === valor);
}

export function esLocale(valor: string | null): valor is Locale {
  return valor === 'es' || valor === 'en';
}
