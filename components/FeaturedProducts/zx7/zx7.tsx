import LinkButton from '@/components/LinkButton/LinkButton';
import styles from './zx7.module.css';

export default function ZX7() {
  return (
    <div className={styles.zx7}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet="/assets/home/mobile/image-speaker-zx7.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
        />
        <img
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front "
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
