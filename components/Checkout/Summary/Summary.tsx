'use client';
import styles from './Summary.module.css';
import CartItem from '@/components/Cart/CartItem/CartItem';
import { useGlobalContext } from '@/app/Context/cart';
import { useState } from 'react';

export default function Summary() {
  const { cart, totalCartItems, emptyCart, getCartTotalPrice } =
    useGlobalContext();

  const [hasWindow, setHasWindow] = useState(window.location);

  if (Object.keys(cart).length) {
    return (
      <div className={styles.summaryWrapper}>
        <div className={styles.summary}>
          <h2>SUMMARY</h2>

          <div className={styles.items}>
            {Object.entries(cart).map(([key, value]) => (
              <CartItem
                type="summary"
                key={value.name}
                name={value.name}
                quantity={value.quantity}
                price={value.price}
                thumbnail={value.thumbnail}
                slug={key}
              />
            ))}
          </div>

          <ul>
            <li>
              <span>
                <div>TOTAL</div>
                <div>$ {getCartTotalPrice().toLocaleString()}</div>
              </span>
            </li>
            <li>
              <span>
                <div>SHIPPING</div>
                <div>$ 50</div>
              </span>
            </li>
            <li>
              <span>
                <div>VAT (INCLUDED)</div>
                <div>
                  $ {Math.floor(getCartTotalPrice() * 0.2).toLocaleString()}
                </div>
              </span>
            </li>
            <li>
              <span>
                <div>GRAND TOTAL</div>
                <div>
                  $
                  {(
                    50 + Math.floor(getCartTotalPrice() * 0.2)
                  ).toLocaleString()}
                </div>
              </span>
            </li>
          </ul>

          <div>
            <button
              form="checkout-form"
              type="submit"
              className={styles.payButton}
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.summaryWrapper}>
      <div className={styles.summary}>Your cart is empty</div>
    </div>
  );
}
