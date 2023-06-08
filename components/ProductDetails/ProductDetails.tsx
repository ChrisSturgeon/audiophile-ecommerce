import styles from './ProductDetails.module.css';

interface Props {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  price: number;
  isNew: boolean;
  description: string;
}
export default function ProductDetails({
  image,
  name,
  price,
  isNew,
  description,
}: Props) {
  return (
    <div className={styles.details}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet={image.mobile}
          width={654}
          height={654}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={image.tablet}
          width={562}
          height={960}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={image.desktop}
          width={1080}
          height={1120}
        />
        <img src={image.mobile} alt={name} width={654} height={704} />
      </picture>
      <div className={styles.content}>
        <div>
          {isNew && <span>NEW PRODUCT</span>}
          <h1>{name}</h1>
        </div>
        <p>{description}</p>
        <div className={styles.price}>$ {price}</div>
        <div>Thingies here</div>
      </div>
    </div>
  );
}
