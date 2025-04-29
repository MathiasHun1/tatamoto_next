import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './app.scss';
import styles from '@/app/styles/layouts/appLayout.module.scss';

import Header from './ui/header';
import Promotion from './ui/promotion';
import Vacation from './ui/vacation';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | TataMoto motorszerviz',
    default: ' TataMoto motorszerviz',
  },
  description:
    'Teljes körű motorkerékpár szervizelés Budapesten és környékén: javítás, karbantartás, alkatrész beszerzés. Minőségi munka, korrekt árak.',
  openGraph: {
    title: 'Motorkerékpár javítás Budapest',
    description:
      'Teljes körű motorkerékpár szervizelés Budapesten és környékén: javítás, karbantartás, alkatrész beszerzés. Minőségi munka, korrekt árak.',
    url: 'https://www.tatamoto.hu',
    locale: 'hu_HU',
  },
  icons: {
    icon: '/images/tatamoto-fekete.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${styles.body} ${montserrat.variable}`}>
        <Header />

        <main className={styles.main}>{children}</main>

        <Promotion />
        <Vacation />
      </body>
    </html>
  );
}
