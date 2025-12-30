'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import AccordionItem from './components/AccordionItem';

export default function TherapeuticSection() {
  const t = useTranslations('therapeutic');
  const items = t.raw('items') as {
    title: string;
    content: string;
  }[];

  return (
    <section className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          src='/images/therapeutic.jpg'
          alt=''
          fill
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          {t.rich('title', {
            italic: (chunks) => <span>{chunks}</span>,
          })}
        </h2>

        <div className={styles.accordion}>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
