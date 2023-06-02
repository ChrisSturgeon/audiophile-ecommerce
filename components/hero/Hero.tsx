import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet="/assets/home/mobile/image-header.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/assets/home/tablet/image-header.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-hero.jpg"
        />
        <img
          src="/assets/home/desktop/image-hero.jpg"
          alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front "
        />
      </picture>
      <div className={styles.content}>
        <div>
          <div className={styles.banner}>NEW PRODUCT</div>
          <h1>
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">SEE PRODUCT</Link>
        </div>
      </div>
    </section>
  );
}
