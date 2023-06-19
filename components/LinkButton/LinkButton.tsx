import styles from './LinkButton.module.css';
import Link from 'next/link';

interface Props {
  text: string;
  URL: string;
  style: string;
  isFullWidth?: boolean;
  toggle?: () => void;
}

export default function LinkButton({
  text,
  URL,
  style,
  isFullWidth,
  toggle,
}: Props) {
  const className = isFullWidth
    ? `${styles.linkButton} ${styles.fullWidth} ${styles[style]}`
    : `${styles.linkButton} ${styles[style]}`;

  return (
    <Link href={URL} className={className} onClick={toggle}>
      {text}
    </Link>
  );
}
