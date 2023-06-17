import styles from './Recommendations.module.css';
import Link from 'next/link';
import Recommendation from '../Recommendation/Recommendation';

export type RecommendationsProps = {
  slug: string;
  name: string;
  category: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}[];

interface Props {
  others: RecommendationsProps;
}

export default function Recommendations({ others }: Props) {
  return (
    <section className={styles.recommendations}>
      <h2>YOU MAY ALSO LIKE</h2>
      <div className={styles.products}>
        {others.map((product) => {
          return (
            <Recommendation
              key={product.name}
              name={product.name}
              image={product.image}
              slug={product.slug}
              category={product.category}
            />
          );
        })}
      </div>
    </section>
  );
}
