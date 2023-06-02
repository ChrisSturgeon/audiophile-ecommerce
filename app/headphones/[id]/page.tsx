import data from '../../../data.json';
import { redirect } from 'next/navigation';

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

  return <div>I am the headphone detail page for {data.name}</div>;
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
