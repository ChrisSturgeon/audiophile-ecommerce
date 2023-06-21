import styles from './page.module.css';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import About from '@/components/About/About';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export const metadata = {
  title: 'Audiophile',
  description: 'Audiophile is an all in one stop to fulfill your audio needs.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner />
      <div className={styles.column}>
        <CategoryLinks />
        <FeaturedProducts />
        <About />
      </div>
    </main>
  );
}
