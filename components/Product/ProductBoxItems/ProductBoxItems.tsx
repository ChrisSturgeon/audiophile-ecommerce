import styles from './ProductBoxItems.module.css';

export type BoxItems = {
  quantity: number;
  item: string;
}[];

interface Props {
  items: BoxItems;
}

export default function ProductBoxItems({ items }: Props) {
  return (
    <section className={styles.boxItems}>
      <h2>IN THE BOX</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.item}>
              <div>{item.quantity}x</div>
              <div>{item.item}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
