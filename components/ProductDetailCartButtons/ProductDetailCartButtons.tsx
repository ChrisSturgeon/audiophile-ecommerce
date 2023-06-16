'use client';
import { useState } from 'react';
import { useGlobalContext } from '@/app/Context/cart';
import styles from './ProductDetailCartButtons.module.css';

interface Props {
  slug: string;
}
export default function ProductDetailCartButtons({ slug }: Props) {
  const { cart, addProductWithQuantity } = useGlobalContext();
  const [quantity, setQuantity] = useState(0);

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decrementQuantity() {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  }

  function addToCart() {
    if (quantity > 0) {
      addProductWithQuantity(slug, quantity);
    }
  }

  return (
    <div className={styles.cartButtons}>
      <button onClick={incrementQuantity}>Increment</button>
      <div>{quantity}</div>
      <button onClick={decrementQuantity}>Decrement</button>
      <button onClick={addToCart}>ADD TO CART</button>
    </div>
  );
}
