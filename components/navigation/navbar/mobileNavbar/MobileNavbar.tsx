import styles from './mobileNavbar.module.css';
import Link from 'next/link';

interface Props {
  isVisible: boolean;
  toggleMobileNav: () => void;
}

export default function MobileNavbar({ isVisible, toggleMobileNav }: Props) {
  return (
    <nav
      aria-hidden={!isVisible}
      className={isVisible ? styles.open : styles.closed}
    >
      <Link href="/headphones" onClick={toggleMobileNav}>
        HEADPHONES
      </Link>
      <Link href="/speakers" onClick={toggleMobileNav}>
        SPEAKERS
      </Link>
      <Link href="/earphones" onClick={toggleMobileNav}>
        EARPHONES
      </Link>
    </nav>
  );
}
