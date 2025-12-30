'use client';

import { useLocale } from 'next-intl';
import clsx from 'clsx';
import styles from './index.module.css';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleSwitch(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className={styles.switcher}>
      {routing.locales.map((language) => (
        <button
          key={language}
          className={clsx(styles.option, language === locale && styles.active)}
          onClick={() => handleSwitch(language)}
          aria-current={language === locale ? 'true' : undefined}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
