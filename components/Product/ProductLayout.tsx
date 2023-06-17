import styles from './ProductLayout.module.css';
import Link from 'next/link';

// Component imports
import ComponentWrapper from '@/components/ComponentWrapper/ComponentWrapper';
import ProductDetails from '@/components/Product/ProductDetails/ProductDetails';
import ProductFeatures from '@/components/Product/ProductFeatures/ProductFeatures';
import ProductBoxItems from '@/components/Product/ProductBoxItems/ProductBoxItems';
import ProductImages from '@/components/Product/ProductImages/ProductImages';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import About from '@/components/About/About';
import Recommendations from '@/components/Product/Recommendations/Recommendations';

// Type imports
import { BoxItems } from '@/components/Product/ProductBoxItems/ProductBoxItems';
import { RecommendationsProps } from '@/components/Product/Recommendations/Recommendations';
import { ProductImagesType } from '@/components/Product/ProductImages/ProductImages';

interface Props {
  category: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  price: number;
  isNew: boolean;
  description: string;
  slug: string;
  features: string;
  includes: BoxItems;
  gallery: ProductImagesType;
  others: RecommendationsProps;
}

export default function ProductLayout({
  category,
  name,
  image,
  price,
  isNew,
  description,
  slug,
  features,
  includes,
  gallery,
  others,
}: Props) {
  return (
    <ComponentWrapper>
      <section className={styles.wrapper}>
        <span className={styles.back}>
          <Link href={`/${category}`}>Go Back</Link>
        </span>
        <div className={styles.product}>
          <ProductDetails
            image={image}
            name={name}
            price={price}
            isNew={isNew}
            description={description}
            slug={slug}
          />
          <div className={styles.featureBoxItems}>
            <ProductFeatures features={features} />
            <ProductBoxItems items={includes} />
          </div>
          <ProductImages images={gallery} name={name} />
          <Recommendations others={others} />
          <CategoryLinks />
          <About />
        </div>
      </section>
    </ComponentWrapper>
  );
}
