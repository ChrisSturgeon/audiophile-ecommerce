import styles from './CategorySKU.module.css';
import LinkButton from '../LinkButton/LinkButton';

interface Props {
  index: number;
  isNew: boolean;
  name: string;
  category: string;
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
  isNew,
  name,
  category,
  slug,
  description,
  images,
}: Props) {
  console.log(images);
  return (
    <div
      className={
        index % 2 === 0 ? styles.sku : `${styles.sku} ${styles.reversed}`
      }
    >
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
          loading={index > 1 ? 'lazy' : 'eager'}
        />
      </picture>
      <div className={styles.content}>
        {isNew && <span>NEW PRODUCT</span>}
        <h2>{name}</h2>
        <p>{description}</p>
        <LinkButton
          URL={`${category}/${slug}`}
          text="SEE PRODUCT"
          style="orange"
        />
      </div>
    </div>
  );
}
