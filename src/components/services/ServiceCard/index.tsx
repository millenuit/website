'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

import styles from './index.module.css';
import { Locale, Service } from '@/types/services';

interface Props {
  service: Service;
}

const FALLBACK_IMAGE = '/images/services/error.png';

export default function ServiceCard({ service }: Props) {
  const locale = useLocale() as Locale;

  const [imgSrc, setImgSrc] = useState(service.image.url);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={service.title[locale]}
          fill
          placeholder="blur"
          blurDataURL={service.image.blur}
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />

        {service.duration && (
          <span className={styles.durationBadge}>
            {service.duration} min
          </span>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{service.title[locale]}</h3>

        <div className={styles.divider} />

        <div className={styles.price}>
          <span className={styles.eur}>{service.price.EUR}€</span>
          <span className={styles.mad}>{service.price.MAD} DH</span>
        </div>
      </div>
    </article>
  );
}
