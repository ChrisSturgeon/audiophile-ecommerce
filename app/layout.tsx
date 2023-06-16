'use client';
import Navbar from '@/components/navigation/navbar/Navbar';
import './globals.css';
import { useState } from 'react';
import useCart from './hooks/useCart';

import styles from './layout.module.css';
import Footer from '@/components/Footer/Footer';
import { GlobalContextProvider } from './Context/cart';

interface CartProps {}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { cart, setCart, incrementProduct, decrementProduct } = useCart();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <GlobalContextProvider>
        <body className={styles.layout}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  );
}
