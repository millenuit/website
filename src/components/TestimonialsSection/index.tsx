'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';
import styles from './index.module.css';
import testimonials from '@/data/testimonials';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Locale } from '@/types/services';

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const locale = useLocale() as Locale;

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;

    const card = trackRef.current.children[index] as HTMLElement;
    gsap.to(trackRef.current, {
      scrollLeft:
        card.offsetLeft -
        trackRef.current.clientWidth / 2 +
        card.clientWidth / 2,
      duration: 0.6,
      ease: 'power3.out',
    });

    setActive(index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Our Client <span>Testimonial</span>
      </h2>

      <div className={styles.slider}>
        <div className={styles.track} ref={trackRef}>
          {testimonials.map((item, i) => (
            <article
              key={i}
              className={clsx(styles.card, {
                [styles.active]: i === active,
              })}
              onClick={() => scrollToIndex(i)}
            >
              <p className={styles.quote}>“</p>
              <p className={styles.text}>{item.text[locale]}</p>

              <div className={styles.profile}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    className={styles.avatar}
                    fill
                  />
                </div>
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>{item.role[locale]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={clsx(styles.dot, {
              [styles.activeDot]: i === active,
            })}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
