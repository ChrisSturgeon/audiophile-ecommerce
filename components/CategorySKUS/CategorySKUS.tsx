import styles from './CategorySKUS.module.css';
import getCategorySKUS from '@/lib/getCategorySKU';
import CategorySKU from '../CategorySKU/CategorySKU';
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper';

interface Props {
  category: string;
}

export default function CategorySKUS({ category }: Props) {
  const skus = getCategorySKUS(category);

  return (
    <ComponentWrapper>
      <section className={styles.skus}>
        {skus.map((sku, index) => {
          return (
            <CategorySKU
              key={sku.id}
              index={index}
              isNew={sku.new}
              name={sku.name}
              category={sku.category}
              slug={sku.slug}
              description={sku.description}
              images={sku.categoryImage}
            />
          );
        })}
      </section>
    </ComponentWrapper>
  );
}
