import data from '../data.json';

export default function getCategorySKUS(category: string) {
  const skus = data.filter((product) => {
    if (product.category === category) {
      return product;
    }
  });

  const sortedSkus = skus.sort((a, b) => {
    return b.price - a.price;
  });

  return sortedSkus;
}
