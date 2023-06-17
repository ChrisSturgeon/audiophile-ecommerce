import data from '../../../data.json';
import styles from '../../productPage.module.css';
import { redirect } from 'next/navigation';
import ComponentWrapper from '@/components/ComponentWrapper/ComponentWrapper';
import Link from 'next/link';
import ProductDetails from '@/components/Product/ProductDetails/ProductDetails';
import ProductFeatures from '@/components/Product/ProductFeatures/ProductFeatures';
import ProductBoxItems from '@/components/Product/ProductBoxItems/ProductBoxItems';
import ProductImages from '@/components/Product/ProductImages/ProductImages';

// TO DO make metadata

function getProductData(id: string) {
  const productData = data.find((product) => {
    return product.slug === id && product.category === 'headphones';
  });

  if (productData) {
    return productData;
  } else {
    return null;
  }
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const data = getProductData(params.id);

  if (!data) {
    redirect('/');
  }

  return (
    <ComponentWrapper>
      <section className={styles.wrapper}>
        <span className={styles.back}>
          <Link href={`/${data.category}`}>Go Back</Link>
        </span>
        <div className={styles.product}>
          <ProductDetails
            image={data.image}
            name={data.name}
            price={data.price}
            isNew={data.new}
            description={data.description}
            slug={data.slug}
          />
          <div className={styles.featureBoxItems}>
            <ProductFeatures features={data.features} />
            <ProductBoxItems items={data.includes} />
          </div>
        </div>
        <ProductImages images={data.gallery} name={data.name} />
      </section>
    </ComponentWrapper>
  );
}

export async function generateStaticParams() {
  const headphones = data.filter((product) => {
    if (product.category === 'headphones') {
      return product;
    }
  });

  return headphones.map((product) => ({
    slug: product!.slug,
  }));
}
