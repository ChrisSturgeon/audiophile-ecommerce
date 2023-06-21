import styles from './HeroBanner.module.css';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet="/assets/home/mobile/image-header.jpg"
          width="1200"
          height="750"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/assets/home/tablet/image-header.jpg"
          width="1536"
          height="1458"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-hero.jpg"
          width="2880"
          height="1458"
        />
        <img
          src="/assets/home/desktop/image-hero.jpg"
          alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front"
          width="2880"
          height="1458"
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
