'use client';
import Navbar from '@/components/navigation/navbar/Navbar';
import './globals.css';
import { useState } from 'react';
import useCart from './hooks/useCart';

import styles from './layout.module.css';
import Footer from '@/components/Footer/Footer';
import { GlobalContextProvider } from './Context/cart';

import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={`${styles.layout} ${manrope.className}`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  );
}
