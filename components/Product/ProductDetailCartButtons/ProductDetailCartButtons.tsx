'use client';
import { useState } from 'react';
import { useGlobalContext } from '@/app/Context/cart';
import styles from './ProductDetailCartButtons.module.css';

interface Props {
  slug: string;
}

export default function ProductDetailCartButtons({ slug }: Props) {
  const { cart, addProductWithQuantity } = useGlobalContext();
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }

  function decrementCounter() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }

  function addToCart() {
    if (counter > 0) {
      addProductWithQuantity(slug, counter);
    }
  }

  return (
    <div className={styles.cartButtons}>
      <div>
        <button onClick={decrementCounter}>-</button>
        <div>{counter}</div>
        <button onClick={incrementCounter}>+</button>
      </div>
      <button onClick={addToCart} className={styles.add}>
        ADD TO CART
      </button>
    </div>
  );
}
