'use client';
import styles from './CartItem.module.css';
import { useGlobalContext } from '@/app/Context/cart';

interface CartItemProps {
  name: string;
  quantity: number;
  price: number;
  thumbnail: string;
  slug: string;
}

function formatName(name: string) {
  const noMark = name.replace('Mark', 'MK');

  const noCategory = ['Headphones', 'Earpones', 'Speaker'].reduce(
    (result, word) => result.replace(word, ''),
    noMark
  );

  return noCategory;
}

export default function CartItem({
  name,
  quantity,
  price,
  thumbnail,
  slug,
}: CartItemProps) {
  const { incrementProduct, decrementProduct } = useGlobalContext();

  return (
    <div className={styles.cartItem}>
      <img src={thumbnail} height="64px" width="64px"></img>
      <div className={styles.text}>
        <div>{formatName(name)}</div>
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
