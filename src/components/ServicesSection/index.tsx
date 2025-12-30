'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import Button from '../ui/button';
import clsx from 'clsx';

export default function ServicesSection() {
  const t = useTranslations('services');

  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.container)}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            {t('title.before')} <span>{t('title.highlight')}</span>
          </h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </header>

        {/* <div className={styles.list}>
          <article className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src='/images/service-relaxation.jpg'
                alt={t('items.relaxation.alt')}
                fill
                className={styles.image}
              />
            </div>
            <h3>{t('items.relaxation.title')}</h3>
            <p>{t('items.relaxation.description')}</p>
          </article>
          <article className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src='/images/service-deep.jpg'
                alt={t('items.deep.alt')}
                fill
                className={styles.image}
              />
            </div>

            <h3>{t('items.deep.title')}</h3>
            <p>{t('items.deep.description')}</p>
          </article>
          <article className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src='/images/service-facial.jpg'
                alt={t('items.facial.alt')}
                fill
                className={styles.image}
              />
            </div>

            <h3>{t('items.facial.title')}</h3>
            <p>{t('items.facial.description')}</p>
          </article>
        </div> */}

        <div className={styles.footer}>
          <Button as='link' href='/services' variant='ghost'>
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}
