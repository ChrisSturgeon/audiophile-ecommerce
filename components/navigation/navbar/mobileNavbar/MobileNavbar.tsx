import styles from './mobileNavbar.module.css';
import Link from 'next/link';
import CategoryLinks from '@/components/CategoryLinks/CategoryLinks';
import CategoryLink from '@/components/CategoryLink/CategoryLink';

interface Props {
  toggleMobileNav: () => void;
}

export default function MobileNavbar({ toggleMobileNav }: Props) {
  return (
    <div className={styles.modal}>
      <nav>
        <div className={styles.categoryLinks}>
          <CategoryLink
            name={'HEADPHONES'}
            imageURL={
              '/assets/shared/desktop/image-category-thumbnail-headphones.png'
            }
            altText={'A pair of xx-99 mark one headphones'}
            width={438}
            height={422}
            isMobileNav={true}
            toggle={toggleMobileNav}
          />
          <CategoryLink
            name={'SPEAKERS'}
            imageURL={
              '/assets/shared/desktop/image-category-thumbnail-speakers.png'
            }
            altText={'A single zx-9 speaker'}
            width={438}
            height={408}
            isMobileNav={true}
            toggle={toggleMobileNav}
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
            isMobileNav={true}
            toggle={toggleMobileNav}
          />
        </div>
      </nav>
    </div>
  );
}
