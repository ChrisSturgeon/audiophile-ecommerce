import styles from './FeaturedProducts.module.css';
import ZX9 from './zx9/zx9';
import ZX7 from './zx7/zx7';
import YX1 from './yx1/yx1';

export default function FeaturedProducts() {
  return (
    <section className={styles.featured}>
      <ZX9 />
      <ZX7 />
      <YX1 />
    </section>
  );
}
