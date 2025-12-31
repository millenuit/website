'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './index.module.css';

export default function WellnessSection() {
  const t = useTranslations('wellness');

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imagePrimary}>
          <Image
            src='/images/wellness-room.png'
            alt={t('images.primaryAlt')}
            fill
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            {t('title.before')} <span>{t('title.highlight')}</span>
          </h2>

          <p className={styles.subtitle}>{t('subtitle')}</p>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3>{t('benefits.stress.title')}</h3>
              <p>{t('benefits.stress.description')}</p>
            </div>

            <div className={styles.benefit}>
              <h3>{t('benefits.pain.title')}</h3>
              <p>{t('benefits.pain.description')}</p>
            </div>

            <div className={styles.benefit}>
              <h3>{t('benefits.relaxation.title')}</h3>
              <p>{t('benefits.relaxation.description')}</p>
            </div>
          </div>
        </div>

        <div className={styles.side}>
          <p className={styles.ctaText}>{t('cta.text')}</p>

          <button className={styles.button}>{t('cta.button')}</button>

          <div className={styles.imageSecondary}>
            <Image
              src='/images/wellness-massage.jpg'
              alt={t('images.secondaryAlt')}
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
