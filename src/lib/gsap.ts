import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase, SplitText);

export { gsap, useGSAP, ScrollTrigger, CustomEase, SplitText };
