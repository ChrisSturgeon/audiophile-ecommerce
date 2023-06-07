import styles from './CategorySKU.module.css';

interface Props {
  index: number;
  name: string;
  slug: string;
  description: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
export default function CategorySKU({
  index,
  name,
  slug,
  description,
  images,
}: Props) {
  console.log(images);
  return (
    <div className={styles.sku}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet={images.mobile}
          // width={654}
          // height={640}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={images.tablet}
          // width={689}
          // height={320}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={images.desktop}
          // width={1100}
          // height={320}
        />
        <img
          src={images.mobile}
          alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front"
          // width={654}
          // height={640}
        />
      </picture>
    </div>
  );
}
