export type Locale = 'en' | 'fr' | 'es' | 'de';

export interface Service {
  id: string;
  category: string;
  order: number;
  title: Record<Locale, string>;
  duration?: string;
  price: { EUR: number; MAD: number };
  image: { url: string; blur: string };
}

export interface ServiceCategory {
  id: string;
  slug: string;
  order: number;
  title: Record<Locale, string>;
  services: Service[];
}
