import styles from './CategoryLink.module.css';
import Link from 'next/link';

interface Props {
  name: string;
  imageURL: string;
}

export default function CategoryLink({ name, imageURL }: Props) {
  return (
    <div className={styles.categoryLink}>
      <img src={imageURL}></img>
      <div className={styles.details}>
        <h2>{name}</h2>
        <Link href={`/${name.toLowerCase()}`}>{name}</Link>
      </div>
    </div>
  );
}
