import styles from './page.module.css';

import CheckoutLayout from '@/components/Checkout/Billing/CheckoutLayout/CheckoutLayout';
import ComponentWrapper from '@/components/ComponentWrapper/ComponentWrapper';

export default function Checkout() {
  return (
    <div className={styles.checkoutWrapper}>
      <ComponentWrapper>
        <CheckoutLayout />
      </ComponentWrapper>
    </div>
  );
}
