'use client';

import styles from './CheckoutLayout.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import Summary from '../Summary/Summary';

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

  const eMoney = watch('paymentMethod');

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
                  <label htmlFor="name">Phone</label>
                  {errors.name && <p>{errors.name.message}</p>}
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
                  defaultValue=""
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
                  defaultValue=""
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
            {eMoney === 'eMoney' && (
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
          </div>
        </form>
      </div>
      <Summary />
    </section>
  );
}
