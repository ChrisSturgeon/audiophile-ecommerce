import styles from './CategoryLinks.module.css';
import CategoryLink from '../CategoryLink/CategoryLink';

export default function CategoryLinks() {
  return (
    <div className={styles.wrapper}>
      <section>
        <CategoryLink
          name={'HEADPHONES'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-headphones.png'
          }
          altText={'A pair of xx-99 mark one headphones'}
        />
        <CategoryLink
          name={'SPEAKERS'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-speakers.png'
          }
          altText={'A single zx-9 speaker'}
        />
        <CategoryLink
          name={'EARPHONES'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-earphones.png'
          }
          altText={
            'The black external charging case for a pair of yx1 earphones'
          }
        />
      </section>
    </div>
  );
}
