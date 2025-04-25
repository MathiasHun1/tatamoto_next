import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './app.scss';
import Image from 'next/image';
import bgImg from '@/public/images/muhely-1.jpeg';
import styles from '@/app/styles/layouts/appLayout.module.scss';

import Header from './ui/header';
import Promotion from './ui/promotion';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${styles.body} ${montserrat.variable}`}>
        <Header />

        <main className={styles.main}>
          <div className={styles.bg_wrapper}>
            <Image src={bgImg} alt="" height={700} />
          </div>
          {children}
        </main>

        <Promotion />
      </body>
    </html>
  );
}
