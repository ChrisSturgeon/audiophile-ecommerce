import styles from './LinkButton.module.css';
import Link from 'next/link';

interface Props {
  text: string;
  URL: string;
  style: string;
}

export default function LinkButton({ text, URL, style }: Props) {
  return (
    <Link href={URL} className={`${styles.linkButton} ${styles[style]}`}>
      {text}
    </Link>
  );
}
