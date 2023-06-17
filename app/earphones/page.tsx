import styles from './page.module.css';

import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import About from '@/components/About/About';
import CategorySKUS from '@/components/CategorySKUS/CategorySKUS';

export default function Page() {
  return (
    <div>
      <CategoryHeader name={'EARPHONES'} />
      <div className={styles.column}>
        <CategorySKUS category="earphones" />
        <CategoryLinks />
        <About />
      </div>
    </div>
  );
}
