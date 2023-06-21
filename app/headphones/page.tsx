import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import About from '@/components/About/About';
import CategorySKUS from '@/components/CategorySKUS/CategorySKUS';
import styles from './page.module.css';

export const metadata = {
  title: 'Headphones',
  description: 'Only the finest headphones bought to you by Audiophile.',
};

export default function HeadphonesPage() {
  return (
    <div>
      <CategoryHeader name={'HEADPHONES'} />
      <div className={styles.column}>
        <CategorySKUS category="headphones" />
        <CategoryLinks />
        <About />
      </div>
    </div>
  );
}
