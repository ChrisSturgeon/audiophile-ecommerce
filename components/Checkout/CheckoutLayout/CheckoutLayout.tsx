'use client';

import styles from './CheckoutLayout.module.css';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Summary from '../Summary/Summary';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: 'eMoney' | 'COD';
  eMoneyNumber: string;
  eMoneyPIN: string;
};

export default function CheckoutLayout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const paymentMethod = watch('paymentMethod');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setShowConfirmation(true);
  };

  return (
    <section className={styles.checkout}>
      <div className={styles.inputs}>
        <h1>CHECKOUT</h1>
        <form onSubmit={handleSubmit(onSubmit)} id="checkout-form" noValidate>
          <div className={styles.billing}>
            <h2>BILLING DETAILS</h2>
            <div>
              <div
                className={
                  errors.name
                    ? `${styles.labelledInput} ${styles.error}`
                    : `${styles.labelledInput}`
                }
              >
                <div className={styles.inputBar}>
                  <label htmlFor="name">Name</label>
                  {errors.name && <p>{errors.name.message}</p>}
                </div>
                <input
                  id="name"
                  {...register('name', {
                    required: 'Name is required',
                  })}
                />
              </div>
              <div
                className={
                  errors.email
                    ? `${styles.labelledInput} ${styles.error}`
                    : `${styles.labelledInput}`
                }
              >
                <div className={styles.inputBar}>
                  <label htmlFor="email">Email</label>
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 ||
                        'The email should have at most 50 characters',
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        'Wrong format',
                    },
                  })}
                />
              </div>
              <div
                className={
                  errors.phone
                    ? `${styles.labelledInput} ${styles.error}`
                    : `${styles.labelledInput}`
                }
              >
                <div className={styles.inputBar}>
                  <label htmlFor="phone">Phone</label>
                  {errors.phone && <p>{errors.phone.message}</p>}
                </div>
                <input
                  type="tel"
                  id="phone"
                  defaultValue=""
                  {...register('phone', {
                    required: 'Phone is required',
                  })}
                />
              </div>
            </div>
          </div>
          <div className={styles.shipping}>
            <h2>SHIPPING INFO</h2>
            <div>
              <div
                className={
                  errors.address
                    ? `${styles.labelledInput} ${styles.error}`
                    : `${styles.labelledInput}`
                }
              >
                <div className={styles.inputBar}>
                  <label htmlFor="address">Address</label>
                  {errors.address && <p>{errors.address.message}</p>}
                </div>
                <input
                  id="address"
                  defaultValue=""
                  {...register('address', {
                    required: 'Address is required',
                  })}
                />
              </div>
              <div
                className={
                  errors.zip
                    ? `${styles.labelledInput} ${styles.error}`
                    : `${styles.labelledInput}`
                }
              >
                <div className={styles.inputBar}>
                  <label htmlFor="zip code">ZIP Code</label>
                  {errors.zip && <p>{errors.zip.message}</p>}
                </div>
                <input
                  id="zip code"
                  defaultValue=""
                  {...register('zip', {
                    required: 'ZIP Code is required',
                  })}
                />
              </div>
              <div
                className={
                  errors.city
                    ? `${styles.labelledInput} ${styles.error}`
                    : `${styles.labelledInput}`
                }
              >
                <div className={styles.inputBar}>
                  <label htmlFor="city">City</label>
                  {errors.city && <p>{errors.city.message}</p>}
                </div>
                <input
                  id="city"
                  {...register('city', {
                    required: 'City is required',
                  })}
                />
              </div>
              <div
                className={
                  errors.country
                    ? `${styles.labelledInput} ${styles.error}`
                    : `${styles.labelledInput}`
                }
              >
                <div className={styles.inputBar}>
                  <label htmlFor="country">Country</label>
                  {errors.country && <p>{errors.country.message}</p>}
                </div>
                <input
                  id="country"
                  {...register('country', {
                    required: 'Country is required',
                  })}
                />
              </div>
            </div>
          </div>
          <div className={styles.payment}>
            <h2>PAYMENT DETAILS</h2>
            <div
              className={
                errors.paymentMethod
                  ? `${styles.labelledInput} ${styles.error}`
                  : `${styles.labelledInput}`
              }
            >
              <div className={styles.inputBar}>
                <p className={styles.paymentLabel}>Payment Method</p>
                {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
              </div>
              <div className={styles.radioInputs}>
                <div>
                  <input
                    {...register('paymentMethod', {
                      required: 'Payment Method is required',
                    })}
                    type="radio"
                    value="COD"
                    id="field-COD"
                  />
                  <label htmlFor="field-COD">
                    <div>Cash on Delivery</div>
                  </label>
                </div>
                <div>
                  <input
                    {...register('paymentMethod', {
                      required: 'Payment Method is required',
                    })}
                    type="radio"
                    value="eMoney"
                    id="field-eMoney"
                  />
                  <label htmlFor="field-eMoney">
                    <div>e-Money</div>
                  </label>
                </div>
              </div>
            </div>
            {paymentMethod === 'eMoney' && (
              <div className={styles.eMoney}>
                <div
                  className={
                    errors.eMoneyNumber
                      ? `${styles.labelledInput} ${styles.error}`
                      : `${styles.labelledInput}`
                  }
                >
                  <div className={styles.inputBar}>
                    <label htmlFor="eMoneyNumber">e-Money Number</label>
                    {errors.eMoneyNumber && (
                      <p>{errors.eMoneyNumber.message}</p>
                    )}
                  </div>
                  <input
                    id="eMoneyPin"
                    {...register('eMoneyNumber', {
                      required: 'Number is required',
                    })}
                  />
                </div>
                <div
                  className={
                    errors.eMoneyNumber
                      ? `${styles.labelledInput} ${styles.error}`
                      : `${styles.labelledInput}`
                  }
                >
                  <div className={styles.inputBar}>
                    <label htmlFor="eMoneyPIN">e-Money Number</label>
                    {errors.eMoneyPIN && <p>{errors.eMoneyPIN.message}</p>}
                  </div>
                  <input
                    id="eMoneyPIN"
                    {...register('eMoneyPIN', {
                      required: 'PIN is required',
                    })}
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'COD' && (
              <div className={styles.COD}>
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                    fill="#D87D4A"
                  />
                </svg>
                <p>
                  The &apos;Cash on Delivery&apos; option enables you to pay in
                  cash when our delivery courier arrives at your residence. Just
                  make sure you address is correct so that your order will not
                  be cancelled
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
      <Summary />

      {showConfirmation && <OrderConfirmation />}
    </section>
  );
}
