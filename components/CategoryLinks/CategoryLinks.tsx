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
        />
        <CategoryLink
          name={'SPEAKERS'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-speakers.png'
          }
        />
        <CategoryLink
          name={'EARPHONES'}
          imageURL={
            '/assets/shared/desktop/image-category-thumbnail-earphones.png'
          }
        />
      </section>
    </div>
  );
}
