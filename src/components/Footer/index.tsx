'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import Button from '../ui/button';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>{t('brand')}</h2>
          <p className={styles.description}>{t('description')}</p>
        </div>
        <nav className={styles.nav}>
          <h3>{t('nav.title')}</h3>
          <ul>
            <li>
              <Link href='/'>{t('nav.home')}</Link>
            </li>
            <li>
              <Link href='/services'>{t('nav.services')}</Link>
            </li>
            <li>
              <Link href='/about'>{t('nav.about')}</Link>
            </li>
            <li>
              <Link href='/contact'>{t('nav.contact')}</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <h3>{t('contact.title')}</h3>
          <p>{t('contact.address')}</p>
          <p>{t('contact.phone')}</p>
          <p>{t('contact.email')}</p>
        </div>
        <div className={styles.cta}>
          <p>{t('cta.text')}</p>
          <Button as='link' href='/appointment' size='sm'>
            {t('cta.button')}
          </Button>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
}
