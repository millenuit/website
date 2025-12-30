import type { Metadata } from 'next';
import '@/styles/index.css';
import { Playfair_Display, Lato } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { MenuProvider } from '@/context/MenuContext';
import PreLoader from '@/components/PreLoader';
import { branch } from './fonts';
import { TransitionProvider } from '@/providers/TransitionRouter';

const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-Playfair-Display',
  display: 'swap',
});

const bodyFont = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-Lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '',
  description: '',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang='en'
      className={`${branch.variable} ${bodyFont.variable} ${headingFont.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <TransitionProvider>
            <MenuProvider>
              <PreLoader />
              <Header />
              <Menu />
              {children}
              <Footer />
            </MenuProvider>
          </TransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
