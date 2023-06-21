import styles from './page.module.css';
import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import About from '@/components/About/About';
import CategorySKUS from '@/components/CategorySKUS/CategorySKUS';

export const metadata = {
  title: `Speakers`,
  description: 'Only the finest speakers bought to you by Audiophile.',
};

export default function HeadphonesPage() {
  return (
    <div>
      <CategoryHeader name={'SPEAKERS'} />
      <div className={styles.column}>
        <CategorySKUS category="speakers" />
        <CategoryLinks />
        <About />
      </div>
    </div>
  );
}
