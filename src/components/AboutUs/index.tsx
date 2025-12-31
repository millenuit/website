'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import clsx from 'clsx';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className={styles.about}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.imageWrapper}>
          <Image
            src='/images/about-spa.png'
            alt={t('imageAlt')}
            fill
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t('title.before')} <span>{t('title.highlight')}</span>
          </h2>
          <p className={styles.lead}>{t('lead')}</p>
          <div className={styles.text}>
            <p>{t('paragraphs.first')}</p>
            <p>{t('paragraphs.second')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
