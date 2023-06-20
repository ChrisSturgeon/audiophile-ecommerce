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
          width={654}
          height={704}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={images.tablet}
          width={1378}
          height={704}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={images.desktop}
          width={1080}
          height={1120}
        />
        <img
          src={images.mobile}
          alt={name}
          loading={index > 1 ? 'lazy' : 'eager'}
          width={1080}
          height={1120}
        />
      </picture>
      <div className={styles.content}>
        <div>
          {isNew && <span>NEW PRODUCT</span>}
          <h2>{name}</h2>
        </div>
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
