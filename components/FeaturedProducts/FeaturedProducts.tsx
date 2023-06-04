import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  return (
    <section className={styles.featured}>
      <div className={styles.zx9}>
        <picture>
          <source
            media="(max-width: 748px)"
            srcSet="/assets/home/mobile/image-speaker-zx9.png"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/home/tablet/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home/desktop/image-speaker-zx9.png"
          />
          <img
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front "
          />
        </picture>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 946 946 ">
          <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".502">
            <circle cx="472" cy="472" r="235.5" />
            <circle cx="472" cy="472" r="270.5" />
            <circle cx="472" cy="472" r="471.5" />
          </g>
        </svg>
      </div>
    </section>
  );
}
