import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import About from '@/components/About/About';

export const metadata = {
  title: 'Audiophile',
  description: 'Audiophile is an all in one stop to fulfill your audio needs.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Hero /> */}
      <div className={styles.column}>
        <CategoryLinks />
        <FeaturedProducts />
        <About />
      </div>
    </main>
  );
}
