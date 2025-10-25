# Internacionalização (i18n)

## Estrutura

- `en-us.json` - Traduções em inglês (padrão)
- `es.json` - Traduções em espanhol
- `index.ts` - Configuração e tipos

## Como usar

```tsx
import { useTranslation } from '../hooks';

const MyComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return <Text>{t.common.appName}</Text>;
};
```

## Alternar idioma (para implementar no futuro)

```tsx
const LanguageToggle = () => {
  const { locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === 'en-us' ? 'es' : 'en-us');
  };

  return (
    <Button title={`Current: ${locale}`} onPress={toggleLanguage} />
  );
};
```

## Adicionar novos idiomas

1. Crie um novo arquivo JSON na pasta `locales` (ex: `pt-br.json`)
2. Copie a estrutura de `en-us.json`
3. Traduza os textos
4. Adicione o tipo em `index.ts`:

```ts
export type Locale = 'en-us' | 'es' | 'pt-br';

export const translations: Record<Locale, Translations> = {
  'en-us': enUs,
  es: es,
  'pt-br': ptBr,
};
```

## Adicionar novas traduções

Edite os arquivos JSON mantendo a mesma estrutura em todos os idiomas:

```json
{
  "secao": {
    "chave": "Valor traduzido"
  }
}
```
