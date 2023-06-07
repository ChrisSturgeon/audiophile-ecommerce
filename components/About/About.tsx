import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.wrapper}>
      <section>
        <picture>
          <source
            media="(max-width: 748px)"
            srcSet="/assets/shared/mobile/image-best-gear.jpg"
            width={654}
            height={600}
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
            width={1378}
            height={600}
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/shared/desktop/image-best-gear.jpg"
            width={540}
            height={588}
          />
          <img
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="A man wearing a paid of headphones, holding his right hand up to to his ear."
            width={654}
            height={640}
          />
        </picture>
        <div className={styles.content}>
          <h2>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for your to browser and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio eqiupment.
          </p>
        </div>
      </section>
    </div>
  );
}
