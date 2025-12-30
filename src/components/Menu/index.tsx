'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import { useMenu } from '@/context/MenuContext';
import { useGSAP } from '@/lib/gsap';
import { gsap } from '@/lib/gsap';
import { useLenis } from 'lenis/react';
import LanguageSwitcher from '../ui/language-switcher';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Appointment',
    href: '/appointment',
  },
];

const socials = [
  {
    label: 'Instagram',
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com',
  },
];

export default function Menu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const { isMenuOpen, toggleMenu } = useMenu();
  const lenis = useLenis();

  useGSAP(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      lenis?.stop();
      gsap.to(menuRef.current, {
        x: '0%',
        duration: 0.6,
        ease: 'power3.out',
      });
    } else {
      lenis?.start();
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.6,
        ease: 'power3.in',
      });
    }
  }, [isMenuOpen]);

  return (
    <aside className={styles.menu} ref={menuRef}>
      <ul className={styles.links}>
        {links.map((link, index) => (
          <li key={index}>
            <Link className={styles.link} href={link.href} onClick={toggleMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.menuFooter}>
        <ul className={styles.socials}>
          {socials.map((social, index) => (
            <li className={styles.socialsItem} key={index}>
              <Link
                className={styles.socialsLink}
                href={social.href}
                target='_blank'
              >
                <span className={styles.socialsIcon}>{social.icon}</span>
                <span className={styles.socialsLabel}>{social.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </div>
    </aside>
  );
}

function InstagramIcon() {
  return (
    <svg
      width='19'
      height='19'
      viewBox='0 0 19 19'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9.5 1.712c2.536 0 2.836.01 3.838.055.927.043 1.43.197 1.764.327.444.173.76.379 1.093.71.332.333.538.65.71 1.093.13.335.285.838.327 1.764.046 1.002.056 1.302.056 3.839s-.01 2.837-.056 3.839c-.042.926-.197 1.429-.327 1.764-.172.443-.378.76-.71 1.092a2.936 2.936 0 0 1-1.093.71c-.334.13-.838.285-1.764.328-1.001.045-1.302.055-3.838.055-2.537 0-2.838-.01-3.84-.055-.925-.043-1.428-.197-1.763-.327a2.947 2.947 0 0 1-1.093-.71 2.938 2.938 0 0 1-.71-1.093c-.13-.335-.285-.838-.327-1.764-.046-1.002-.055-1.302-.055-3.839s.01-2.837.055-3.839c.042-.926.197-1.429.327-1.764.172-.443.378-.76.71-1.092a2.935 2.935 0 0 1 1.093-.71c.335-.13.838-.285 1.764-.328 1.001-.045 1.302-.055 3.839-.055ZM9.5 0C6.92 0 6.596.011 5.583.058 4.572.104 3.88.264 3.277.499a4.652 4.652 0 0 0-1.683 1.096A4.656 4.656 0 0 0 .5 3.278C.264 3.882.103 4.572.057 5.583.011 6.596 0 6.92 0 9.5s.01 2.904.057 3.917c.046 1.01.207 1.702.442 2.306a4.652 4.652 0 0 0 1.096 1.682 4.655 4.655 0 0 0 1.682 1.096c.604.235 1.295.396 2.306.442C6.596 18.989 6.92 19 9.5 19s2.904-.01 3.917-.057c1.01-.046 1.702-.207 2.306-.442a4.651 4.651 0 0 0 1.682-1.096 4.655 4.655 0 0 0 1.096-1.682c.235-.604.396-1.295.442-2.306.046-1.013.057-1.337.057-3.917s-.01-2.904-.057-3.917c-.046-1.01-.207-1.702-.442-2.306a4.652 4.652 0 0 0-1.096-1.682A4.655 4.655 0 0 0 15.723.499c-.604-.235-1.295-.396-2.306-.442C12.404.011 12.08 0 9.5 0Z'></path>
      <path d='M9.5 4.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 7.834a3.083 3.083 0 1 1 0-6.167 3.083 3.083 0 0 1 0 6.167Z'></path>
      <path d='M14.252 5.699a.95.95 0 1 0 0-1.9.95.95 0 0 0 0 1.9Z'></path>
    </svg>
  );
}
