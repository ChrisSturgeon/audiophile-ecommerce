import styles from './CategoryLink.module.css';
import Link from 'next/link';

interface Props {
  name: string;
  imageURL: string;
  altText: string;
  width: number;
  height: number;
}

export default function CategoryLink({
  name,
  imageURL,
  altText,
  width,
  height,
}: Props) {
  return (
    <div className={styles.categoryLink}>
      <img src={imageURL} alt={altText} width={width} height={height} />
      <div className={styles.details}>
        <h2>{name}</h2>
        <Link href={`/${name.toLowerCase()}`}>
          <span>
            <div>SHOP</div>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </Link>
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
    </div>
  );
}
