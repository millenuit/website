export type Locale = 'en' | 'fr' | 'es' | 'de';

export type LocaleText = {
  fr: string;
  en: string;
  es: string;
  de: string;
};

export type Price = {
  EUR: number;
  MAD: number;
  from?: boolean;
};

export type Service = {
  id: string; // english, stable
  slug: string; // english, URL-safe
  title: LocaleText;
  price: Price;
  duration?: number; // always minutes
  priority?: number; // optional fine-tuning
  image: { url: string; blur: string };
};

export type ServiceCategory = {
  id: string;
  slug: string;
  title: LocaleText;
  description?: LocaleText;
  services: Service[];
};
