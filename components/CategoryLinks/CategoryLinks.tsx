import styles from './CategoryLinks.module.css';
import CategoryLink from '../CategoryLink/CategoryLink';
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper';

export default function CategoryLinks() {
  return (
    <ComponentWrapper>
      <section className={styles.categoryLinks}>
        <CategoryLink
          name={'HEADPHONES'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-headphones.png'
          }
          altText={'A pair of xx-99 mark one headphones'}
          width={438}
          height={422}
        />
        <CategoryLink
          name={'SPEAKERS'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-speakers.png'
          }
          altText={'A single zx-9 speaker'}
          width={438}
          height={408}
        />
        <CategoryLink
          name={'EARPHONES'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-earphones.png'
          }
          altText={
            'The black external charging case for a pair of yx1 earphones'
          }
          width={438}
          height={380}
        />
      </section>
    </ComponentWrapper>
  );
}
