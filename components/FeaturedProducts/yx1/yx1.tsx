import styles from './yx1.module.css';
import LinkButton from '@/components/LinkButton/LinkButton';

export default function YX1() {
  return (
    <div className={styles.yx1}>
      <div className={styles.imageWrapper}>
        <picture>
          <source
            media="(max-width: 748px)"
            srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
            width={654}
            height={400}
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
            width={678}
            height={640}
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
            width={540}
            height={320}
          />
          <img
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front"
            width={654}
            height={400}
          />
        </picture>
      </div>
      <div className={styles.content}>
        <h2>YX1 EARPHONES</h2>
        <LinkButton
          text={'SEE PRODUCT'}
          URL={'/earphones/yx1-earphones'}
          style={'transparent'}
        />
      </div>
    </div>
  );
}
