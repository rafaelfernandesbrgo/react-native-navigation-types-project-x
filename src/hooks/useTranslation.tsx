import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, defaultLocale, Locale, Translations } from '../locales';
import { errorMessages } from '../errors';

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const value: TranslationContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(errorMessages.hooks.useTranslation.contextError);
  }
  return context;
};
