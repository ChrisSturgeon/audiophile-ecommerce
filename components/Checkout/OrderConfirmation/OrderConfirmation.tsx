'use client';

import styles from './OrderConfirmation.module.css';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '@/app/Context/cart';
import formatProductName from '@/lib/formatProductName';
import LinkButton from '@/components/LinkButton/LinkButton';

export default function OrderConfirmation() {
  const { cart, totalCartItems, getCartTotalPrice, emptyCart } =
    useGlobalContext();

  const [windowIsDefined, setWindowIsDefined] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowIsDefined(true);
      return;
    }

    setWindowIsDefined(false);
  }, []);

  if (windowIsDefined) {
    const firstItem = cart[Object.keys(cart)[0]];

    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#D87D4A" cx="32" cy="32" r="32" />
              <path
                stroke="#FFF"
                strokeWidth="4"
                d="m20.754 33.333 6.751 6.751 15.804-15.803"
              />
            </g>
          </svg>
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p>You will receieve an email confirmation shortly.</p>
          <div className={styles.details}>
            <div className={styles.firstProduct}>
              <div>
                <img src={firstItem.thumbnail} height="64px" width="64px"></img>
              </div>
              <div className={styles.namePrice}>
                <div>{formatProductName(firstItem.name)}</div>
                <div>$ {firstItem.price.toLocaleString()}</div>
              </div>
              <div className={styles.quantity}>x{firstItem.quantity}</div>
              <div className={styles.others}>
                and {totalCartItems - firstItem.quantity} other items(s)
              </div>
            </div>
            <div className={styles.grandTotal}>
              <div>GRAND TOTAL</div>
              <div>$ {getCartTotalPrice().toLocaleString()}</div>
            </div>
          </div>
          <LinkButton
            text="BACK TO HOME"
            URL="/"
            style="orange"
            isFullWidth={true}
          />
        </div>
      </div>
    );
  }

  return <div></div>;
}
