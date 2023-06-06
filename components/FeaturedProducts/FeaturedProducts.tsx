import styles from './FeaturedProducts.module.css';
import Link from 'next/link';

export default function FeaturedProducts() {
  return (
    <section className={styles.featured}>
      <div className={styles.zx9}>
        <div className={styles.content}>
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
          <div className={styles.text}>
            <h2>
              ZX9 <br />
              SPEAKER
            </h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sounds.
            </p>
            <Link href={'/speakers/zx9-speaker'}>SEE PRODUCT</Link>
          </div>
        </div>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          viewBox="0 0 944 944"
        >
          <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".502">
            <circle cx="472" cy="472" r="235.5" />
            <circle cx="472" cy="472" r="270.5" />
            <circle cx="472" cy="472" r="471.5" />
          </g>
        </svg> */}
      </div>
    </section>
  );
}
