'use client';
import styles from './CartItem.module.css';
import { useGlobalContext } from '@/app/Context/cart';
import formatProductName from '@/lib/formatProductName';

interface CartItemProps {
  type: 'cart' | 'summary';
  name: string;
  quantity: number;
  price: number;
  thumbnail: string;
  slug: string;
}

export default function CartItem({
  type,
  name,
  quantity,
  price,
  thumbnail,
  slug,
}: CartItemProps) {
  const { incrementProduct, decrementProduct } = useGlobalContext();

  if (type === 'cart') {
    return (
      <div className={styles.cartItem}>
        <img src={thumbnail} height="64px" width="64px"></img>
        <div className={styles.text}>
          <div>{formatProductName(name)}</div>
          <div>$ {price.toLocaleString()}</div>
        </div>
        <div className={styles.counter}>
          <button onClick={() => decrementProduct(slug)}>-</button>
          <div>{quantity}</div>
          <button onClick={() => incrementProduct(slug)}>+</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartItem}>
      <img src={thumbnail} height="64px" width="64px"></img>
      <div className={styles.text}>
        <div>{formatProductName(name)}</div>
        <div>$ {price.toLocaleString()}</div>
      </div>
      <div className={styles.quantity}>x{quantity}</div>
    </div>
  );
}
