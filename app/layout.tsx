import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import './app.scss';
import Image from 'next/image';
import bgImg from '@/public/images/muhely-1.jpeg';
import styles from '@/app/styles/layouts/appLayout.module.scss';

import Nav from './ui/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
});

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Nav />
        <main className={styles.main}>
          <div className={styles.bg_wrapper}>
            <Image src={bgImg} alt="" height={700} />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
