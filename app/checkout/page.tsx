import styles from './page.module.css';

import CheckoutLayout from '@/components/Checkout/CheckoutLayout/CheckoutLayout';
import ComponentWrapper from '@/components/ComponentWrapper/ComponentWrapper';

export const metadata = {
  title: `Checkout`,
  description: 'Checkout on Audiopphile',
};

export default function Checkout() {
  return (
    <div className={styles.checkoutWrapper}>
      <ComponentWrapper>
        <CheckoutLayout />
      </ComponentWrapper>
    </div>
  );
}
