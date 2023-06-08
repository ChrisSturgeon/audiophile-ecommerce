import data from '../../../data.json';
import styles from '../../productPage.module.css';
import { redirect } from 'next/navigation';
import ComponentWrapper from '@/components/ComponentWrapper/ComponentWrapper';
import Link from 'next/link';
import ProductDetails from '@/components/ProductDetails/ProductDetails';

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
  console.log(data);

  if (!data) {
    redirect('/');
  }

  return (
    <ComponentWrapper>
      <section className={styles.product}>
        <span className={styles.back}>
          <Link href={`/${data.category}`}>Go Back</Link>
        </span>
        <ProductDetails
          image={data.image}
          name={data.name}
          price={data.price}
          isNew={data.new}
          description={data.description}
        />
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
