import styles from './ProductImages.module.css';

export type ProductImagesType = {
  first: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  second: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  third: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export interface ProductImagesProps {
  images: ProductImagesType;
  name: string;
}

export default function ProductImages({ images, name }: ProductImagesProps) {
  return (
    <section className={styles.images}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet={images.first.mobile}
          width={654}
          height={348}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={images.first.tablet}
          width={554}
          height={348}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={images.first.desktop}
          width={1080}
          height={1120}
        />
        <img
          src={images.first.mobile}
          alt={name}
          loading="lazy"
          width={445}
          height={280}
        />
      </picture>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet={images.second.mobile}
          width={654}
          height={348}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={images.second.tablet}
          width={554}
          height={348}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={images.second.desktop}
          width={1080}
          height={1120}
        />
        <img
          src={images.second.mobile}
          alt={name}
          loading="lazy"
          width={445}
          height={280}
        />
      </picture>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet={images.third.mobile}
          width={654}
          height={736}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={images.third.tablet}
          width={790}
          height={736}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={images.third.desktop}
          width={635}
          height={592}
        />
        <img
          src={images.third.mobile}
          alt={name}
          loading="lazy"
          width={654}
          height={736}
        />
      </picture>
    </section>
  );
}
