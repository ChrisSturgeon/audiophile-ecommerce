'use client';
import Navbar from '@/components/navigation/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import useCart from './hooks/useCart';

const inter = Inter({ subsets: ['latin'] });
import styles from './layout.module.css';
import Footer from '@/components/Footer/Footer';

interface CartProps {}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cart, setCart, incrementCart } = useCart();
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
      <body className={styles.layout}>
        <Navbar cart={cart} incrementCart={incrementCart} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
