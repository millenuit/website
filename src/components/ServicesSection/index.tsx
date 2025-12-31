'use client';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import styles from './index.module.css';
import Button from '../ui/button';
import clsx from 'clsx';
import { Locale } from '@/types/services';

const services = [
  {
    id: 'massage',
    title: { fr: 'Massage', en: 'Massage', es: 'Masaje', de: 'Massage' },
    description: {
      fr: 'Évadez-vous et laissez-vous emporter par une sensation de confort dans un environnement apaisant pendant 1 heure de massage.',
      en: 'Escape and enjoy a moment of comfort in a relaxing environment with a 1-hour massage.',
      es: 'Escápate y disfruta de una sensación de confort en un ambiente relajante con un masaje de 1 hora.',
      de: 'Entspannen Sie sich und genießen Sie ein Gefühl von Wohlbefinden in ruhiger Atmosphäre bei einer 1-stündigen Massage.',
    },
    image: { url: '/images/services/massage-back.jpeg' },
  },
  {
    id: 'hairdressing',
    title: {
      fr: 'Coiffure',
      en: 'Hairdressing',
      es: 'Peluquería',
      de: 'Friseur',
    },
    description: {
      fr: 'Brushing, Brushing Steam Pod, Coupe, Coloration, Coloration sans ammoniaque, Mèches, Balayage, Extensions, Kératine, Botox capillaire, Lissage brésilien.',
      en: 'Blow-dry, Steam Pod blow-dry, Haircut, Coloring, Ammonia-free coloring, Highlights, Balayage, Extensions, Keratin, Hair botox, Brazilian straightening.',
      es: 'Brushing, Steam Pod, Corte, Coloración, Coloración sin amoníaco, Mechas, Balayage, Extensiones, Queratina, Botox capilar, Alisado brasileño.',
      de: 'Föhnen, Steam Pod, Haarschnitt, Färben, Ammoniakfreie Färbung, Strähnen, Balayage, Extensions, Keratin, Hair Botox, Brasilianische Glättung.',
    },
    image: { url: '/images/services/full-coloring.webp' },
  },
  {
    id: 'facial-care',
    title: {
      fr: 'Soins du visage',
      en: 'Facial Care',
      es: 'Cuidado facial',
      de: 'Gesichtspflege',
    },
    description: {
      fr: 'Hydradermie Jeunesse, Hydradermie Age Logic, Hydradermie Lift, Eye Logic.',
      en: 'Hydradermie Youth, Hydradermie Age Logic, Hydradermie Lift, Eye Logic.',
      es: 'Hydradermie Juventud, Hydradermie Age Logic, Hydradermie Lift, Eye Logic.',
      de: 'Hydradermie Jugend, Hydradermie Age Logic, Hydradermie Lift, Eye Logic.',
    },
    image: { url: '/images/services/facial-optimizer.jpg' },
  },
  {
    id: 'hair-removal',
    title: {
      fr: 'Épilation',
      en: 'Hair Removal',
      es: 'Depilación',
      de: 'Haarentfernung',
    },
    description: {
      fr: 'Duvet, Sourcils, Visage, Aisselles, Avant-bras, Bras complets, Demi-jambes, Jambes complètes, Maillot brésilien, Maillot intégral, Bord de maillot, Ventre, Dos.',
      en: 'Upper lip, Eyebrows, Face, Underarms, Forearms, Full arms, Half legs, Full legs, Brazilian bikini, Full bikini, Bikini line, Stomach, Back.',
      es: 'Labio superior, Cejas, Rostro, Axilas, Antebrazos, Brazos completos, Medias piernas, Piernas completas, Bikini brasileño, Bikini integral, Línea del bikini, Vientre, Espalda.',
      de: 'Oberlippe, Augenbrauen, Gesicht, Achseln, Unterarme, Ganze Arme, Halbe Beine, Ganze Beine, Brasilianisches Bikini, Intim komplett, Bikinizone, Bauch, Rücken.',
    },
    image: { url: '/images/services/upper-lip-waxing.webp' },
  },
];

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale() as Locale;

  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.container)}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            {t('title.before')} <span>{t('title.highlight')}</span>
          </h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </header>

        <div className={styles.list}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={service.image.url}
                  alt={service.title[locale]}
                  fill
                  className={styles.image}
                />
                <div className={styles.gradient} />

                <div className={styles.content}>
                  <h3>{service.title[locale]}</h3>
                  <p>{service.description[locale]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <Button as='link' href='/services' variant='ghost'>
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}
