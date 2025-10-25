import enUs from './en-us.json';
import es from './es.json';

export type Locale = 'en-us' | 'es';

export type Translations = typeof enUs;

export const translations: Record<Locale, Translations> = {
  'en-us': enUs,
  es: es,
};

export const defaultLocale: Locale = 'en-us';
