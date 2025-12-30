'use client';

import Image from 'next/image';

import styles from './index.module.css';
import { Locale, Service } from '@/types/services';
import { useLocale } from 'next-intl';

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const locale = useLocale() as Locale;
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={service.image.url}
          alt={service.title[locale]}
          fill
          placeholder='blur'
          blurDataURL={service.image.blur}
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{service.title[locale]}</h3>

        {service.duration && (
          <span className={styles.duration}>{service.duration}</span>
        )}

        <div className={styles.price}>
          <span>{service.price.EUR}€</span>
          <span>{service.price.MAD} DH</span>
        </div>
      </div>
    </article>
  );
}
