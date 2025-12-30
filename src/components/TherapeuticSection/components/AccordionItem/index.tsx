'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './index.module.css';

interface Props {
  title: string;
  content: string;
}

export default function AccordionItem({ title, content }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (!contentRef.current) return;

    setOpen((prev) => !prev);

    gsap.to(contentRef.current, {
      height: open ? 0 : 'auto',
      opacity: open ? 0 : 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <div className={styles.item}>
      <button className={styles.header} onClick={toggle} aria-expanded={open}>
        <span>{title}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>

      <div
        ref={contentRef}
        className={styles.panel}
        style={{ height: 0, opacity: 0 }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
