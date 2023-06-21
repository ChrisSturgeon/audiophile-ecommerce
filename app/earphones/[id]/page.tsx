import data from '../../../data.json';
import { redirect } from 'next/navigation';
import ProductLayout from '@/components/Product/ProductLayout';

export const metadata = {
  title: `Earphones`,
  description: 'Only the finest earphones bought to you by Audiophile.',
};

function getProductData(id: string) {
  const productData = data.find((product) => {
    return product.slug === id && product.category === 'earphones';
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
    <ProductLayout
      category={data.category}
      name={data.name}
      image={data.image}
      price={data.price}
      isNew={data.new}
      description={data.description}
      slug={data.slug}
      features={data.features}
      includes={data.includes}
      gallery={data.gallery}
      others={data.others}
    />
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
