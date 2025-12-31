'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import Button from '../ui/button';
import clsx from 'clsx';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t('title.before')} <span>{t('title.highlight')}</span>
          </h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <div className={styles.actions}>
            <Button as='link' href='/appointment'>
              {t('cta.primary')}
            </Button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src='/images/hero.png'
            alt={t('imageAlt')}
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
