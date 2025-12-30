'use client';

import { useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';
import styles from './index.module.css';
import { gsap, useGSAP } from '@/lib/gsap';

export default function PreLoader() {
  const preLoaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    lenis?.stop();
  }, [lenis]);

  useEffect(() => {
    if (!preLoaderRef.current || !counterRef.current) return;
    const counter = { value: 0 };
    const tl = gsap.timeline();
    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: 'none',
      onUpdate: () => {
        counterRef.current!.textContent = `${Math.round(counter.value)}%`;
      },
    }).to(preLoaderRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1,
      ease: '0.9, 0, 0.1, 1',
    });
    return () => {
      tl.kill();
    };
  });

  return (
    <div className={styles.preLoader} ref={preLoaderRef}>
      <div className={styles.progressBar} ref={progressBarRef} />
      <div className={styles.counter} ref={counterRef}>
        0%
      </div>
    </div>
  );
}
