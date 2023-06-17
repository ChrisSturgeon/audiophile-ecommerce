import styles from './Recommendation.module.css';
import Link from 'next/link';
import LinkButton from '@/components/LinkButton/LinkButton';

interface Props {
  slug: string;
  name: string;
  category: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export default function Recommendation({ name, image, slug, category }: Props) {
  const url = `/${category}/${slug}`;

  return (
    <div className={styles.recommendation}>
      <picture>
        <source
          media="(max-width: 748px)"
          srcSet={image.mobile}
          width={654}
          height={240}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={image.tablet}
          width={446}
          height={636}
        />
        <source
          media="(min-width: 1024px)"
          srcSet={image.desktop}
          width={700}
          height={636}
        />
        <img
          src={image.mobile}
          alt="A pair of XX99 Mark 2 headphones in black with light reflecting from the front"
          width={654}
          height={240}
          loading="lazy"
        />
      </picture>
      <h3>{name}</h3>
      <LinkButton text={'SEE PRODUCT'} URL={url} style={'orange'} />
    </div>
  );
}
