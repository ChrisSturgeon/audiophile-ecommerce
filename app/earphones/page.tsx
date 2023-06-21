import styles from './page.module.css';

import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import About from '@/components/About/About';
import CategorySKUS from '@/components/CategorySKUS/CategorySKUS';

export const metadata = {
  title: `Earphones`,
  description: 'Only the finest earphones bought to you by Audiophile.',
};

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
