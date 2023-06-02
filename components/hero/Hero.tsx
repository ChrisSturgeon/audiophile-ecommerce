import Image from 'next/image';
import headphones from './image-hero.jpg';
import styles from './Hero.module.css';

const test = '/public/assets/home/desktop/image-hero.jpg';

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <picture>
        <source
          media="(max-width: 1023px)"
          srcSet="/assets/home/tablet/image-header.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-hero.jpg"
        />
        <img src="/assets/home/desktop/image-hero.jpg" />
      </picture>
      {/* <Image src={headphones} width={200} height={200} /> */}
      {/* <div>I am the hero</div> */}
    </section>
  );
}
