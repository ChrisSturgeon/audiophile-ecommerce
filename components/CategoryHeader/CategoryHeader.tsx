import styles from './CategoryHeader.module.css';
interface Props {
  name: string;
}

export default function CategoryHeader({ name }: Props) {
  return (
    <header className={styles.categoryHeader}>
      <h1>{name}</h1>
    </header>
  );
}
