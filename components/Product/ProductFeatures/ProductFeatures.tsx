import styles from './ProductFeatures.module.css';

interface Props {
  features: string;
}

export default function ProductFeatures({ features }: Props) {
  return (
    <section className={styles.features}>
      <h2>FEATURES</h2>
      <p>{features}</p>
    </section>
  );
}
