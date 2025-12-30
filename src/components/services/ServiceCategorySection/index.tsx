'use client';

import { useLocale } from 'next-intl';
import styles from './index.module.css';
import ServiceCard from '../ServiceCard';
import { Locale, ServiceCategory } from '@/types/services';

interface Props {
  category: ServiceCategory;
}

export default function ServiceCategorySection({ category }: Props) {
  const locale = useLocale() as Locale;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{category.title[locale]}</h2>

      <div className={styles.grid}>
        {category.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
