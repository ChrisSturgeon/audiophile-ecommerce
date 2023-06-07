import LinkButton from '@/components/LinkButton/LinkButton';
import styles from './zx7.module.css';

export default function ZX7() {
  return (
    <div className={styles.zx7}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet="/assets/home/mobile/image-speaker-zx7.jpg"
          width={654}
          height={640}
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
          width={689}
          height={320}
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
          width={1100}
          height={320}
        />
        <img
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front"
          width={654}
          height={640}
        />
      </picture>
      <div className={styles.content}>
        <h2>ZX7 SPEAKER</h2>
        <LinkButton
          text={'SEE PRODUCT'}
          URL={'/speakers/zx7-speaker'}
          style={'transparent'}
        />
      </div>
    </div>
  );
}
