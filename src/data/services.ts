import { ServiceCategory } from '@/types/services';

const BLUR = 'data:image/png;base64,PLACEHOLDER';

export const services: ServiceCategory[] = [
  /* ================= HAIR & MAKEUP ================= */
  {
    id: 'hair-makeup',
    slug: 'hair-makeup',
    order: 1,
    title: {
      fr: 'Coiffure & Maquillage',
      en: 'Hair & Makeup',
      es: 'Peluquería y Maquillaje',
      de: 'Haare & Make-up',
    },
    services: [
      {
        id: 'balayage',
        category: 'hair-makeup',
        order: 1,
        title: {
          fr: 'Balayage',
          en: 'Balayage',
          es: 'Balayage',
          de: 'Balayage',
        },
        price: { EUR: 50, MAD: 500 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'coiffure-jour',
        category: 'hair-makeup',
        order: 2,
        title: {
          fr: 'Coiffure du jour',
          en: 'Day Hairstyle',
          es: 'Peinado de día',
          de: 'Tagesfrisur',
        },
        price: { EUR: 25, MAD: 250 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'coiffure-soir',
        category: 'hair-makeup',
        order: 3,
        title: {
          fr: 'Coiffure du soir',
          en: 'Evening Hairstyle',
          es: 'Peinado de noche',
          de: 'Abendfrisur',
        },
        price: { EUR: 45, MAD: 450 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'maquillage-jour',
        category: 'hair-makeup',
        order: 4,
        title: {
          fr: 'Maquillage jour',
          en: 'Day Makeup',
          es: 'Maquillaje de día',
          de: 'Tages-Make-up',
        },
        price: { EUR: 25, MAD: 250 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'maquillage-soir',
        category: 'hair-makeup',
        order: 5,
        title: {
          fr: 'Maquillage soir',
          en: 'Evening Makeup',
          es: 'Maquillaje de noche',
          de: 'Abend-Make-up',
        },
        price: { EUR: 45, MAD: 450 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'soin-huiles',
        category: 'hair-makeup',
        order: 6,
        title: {
          fr: 'Soin cheveux aux huiles',
          en: 'Oil Hair Treatment',
          es: 'Tratamiento capilar con aceites',
          de: 'Haarpflege mit Ölen',
        },
        price: { EUR: 30, MAD: 300 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
    ],
  },

  /* ================= ESSENTIALS ================= */
  {
    id: 'essentials',
    slug: 'essentials',
    order: 2,
    title: {
      fr: 'Essentielles',
      en: 'Essentials',
      es: 'Esenciales',
      de: 'Essentials',
    },
    services: [
      {
        id: 'soin-keratine',
        category: 'essentials',
        order: 1,
        title: {
          fr: 'Soin cheveux à la kératine',
          en: 'Keratin Hair Treatment',
          es: 'Tratamiento de queratina',
          de: 'Keratin-Haarbehandlung',
        },
        price: { EUR: 30, MAD: 300 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'soin-normal',
        category: 'essentials',
        order: 2,
        title: {
          fr: 'Soin normal',
          en: 'Basic Hair Care',
          es: 'Cuidado básico',
          de: 'Normale Pflege',
        },
        price: { EUR: 10, MAD: 100 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'shampoo-masque',
        category: 'essentials',
        order: 3,
        title: {
          fr: 'Shampooing + masque',
          en: 'Shampoo & Mask',
          es: 'Champú y mascarilla',
          de: 'Shampoo & Maske',
        },
        price: { EUR: 5, MAD: 50 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'lissage-bresilien',
        category: 'essentials',
        order: 4,
        title: {
          fr: 'Lissage brésilien (kératine)',
          en: 'Brazilian Keratin Straightening',
          es: 'Alisado brasileño',
          de: 'Brasilianische Keratin-Glättung',
        },
        price: { EUR: 150, MAD: 1500 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'defrisage',
        category: 'essentials',
        order: 5,
        title: {
          fr: 'Défrisage',
          en: 'Hair Relaxing',
          es: 'Alisado químico',
          de: 'Haarglättung',
        },
        price: { EUR: 60, MAD: 600 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'meches',
        category: 'essentials',
        order: 6,
        title: {
          fr: 'Mèches',
          en: 'Highlights',
          es: 'Mechas',
          de: 'Strähnen',
        },
        price: { EUR: 55, MAD: 550 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
    ],
  },

  /* ================= HAMMAM ================= */
  {
    id: 'hammam',
    slug: 'hammam',
    order: 3,
    title: {
      fr: 'Hammam',
      en: 'Hammam',
      es: 'Hammam',
      de: 'Hammam',
    },
    services: [
      {
        id: 'hammam-marocain',
        category: 'hammam',
        order: 1,
        title: {
          fr: 'Hammam marocain',
          en: 'Moroccan Hammam',
          es: 'Hammam marroquí',
          de: 'Marokkanisches Hammam',
        },
        price: { EUR: 25, MAD: 250 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'hammam-beldi',
        category: 'hammam',
        order: 2,
        title: {
          fr: 'Hammam beldi',
          en: 'Traditional Hammam',
          es: 'Hammam tradicional',
          de: 'Traditionelles Hammam',
        },
        price: { EUR: 40, MAD: 400 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'hammam-oriental',
        category: 'hammam',
        order: 3,
        title: {
          fr: 'Hammam oriental',
          en: 'Oriental Hammam',
          es: 'Hammam oriental',
          de: 'Orientalisches Hammam',
        },
        price: { EUR: 50, MAD: 500 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'hammam-royal',
        category: 'hammam',
        order: 4,
        title: {
          fr: 'Hammam royal',
          en: 'Royal Hammam',
          es: 'Hammam real',
          de: 'Königliches Hammam',
        },
        price: { EUR: 65, MAD: 650 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
    ],
  },

  /* ================= MASSAGE ================= */
  {
    id: 'massage',
    slug: 'massage',
    order: 4,
    title: {
      fr: 'Massage',
      en: 'Massage',
      es: 'Masajes',
      de: 'Massage',
    },
    services: [
      {
        id: 'massage-relaxant',
        category: 'massage',
        order: 1,
        title: {
          fr: 'Massage relaxant',
          en: 'Relaxing Massage',
          es: 'Masaje relajante',
          de: 'Entspannungsmassage',
        },
        duration: '1H',
        price: { EUR: 40, MAD: 400 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'massage-tonifiant',
        category: 'massage',
        order: 2,
        title: {
          fr: 'Massage tonifiant',
          en: 'Toning Massage',
          es: 'Masaje tonificante',
          de: 'Straffungsmassage',
        },
        duration: '1H',
        price: { EUR: 45, MAD: 450 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'massage-antistress',
        category: 'massage',
        order: 3,
        title: {
          fr: 'Massage antistress',
          en: 'Anti-Stress Massage',
          es: 'Masaje antiestrés',
          de: 'Anti-Stress-Massage',
        },
        duration: '1H',
        price: { EUR: 55, MAD: 550 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
      {
        id: 'massage-4-mains',
        category: 'massage',
        order: 4,
        title: {
          fr: 'Massage à quatre mains',
          en: 'Four Hands Massage',
          es: 'Masaje a cuatro manos',
          de: 'Vierhändige Massage',
        },
        duration: '1H',
        price: { EUR: 70, MAD: 700 },
        image: { url: '/images/services/massage.jpg', blur: BLUR },
      },
    ],
  },
];
