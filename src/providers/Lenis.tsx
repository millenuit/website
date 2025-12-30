'use client';

import gsap from 'gsap';
import { LenisRef, ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';

export default function LenisProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
  function update(time: number) {
    lenisRef.current?.lenis?.raf(time);
  }

  gsap.ticker.add(update);
  return () => gsap.ticker.remove(update);
}, []);


  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.05,
        smoothWheel: true,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
