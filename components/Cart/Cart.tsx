'use client';
import styles from './Cart.module.css';
import { useGlobalContext } from '@/app/Context/cart';

// Component imports
import ComponentWrapper from '../ComponentWrapper/ComponentWrapper';
import CartItem from './CartItem/CartItem';
import LinkButton from '../LinkButton/LinkButton';

interface CartProps {
  toggleCart: () => void;
}

export default function Cart({ toggleCart }: CartProps) {
  const { cart, totalCartItems, emptyCart, getCartTotalPrice } =
    useGlobalContext();

  const formattedTotal = getCartTotalPrice().toLocaleString();

  // Return empty cart message
  if (totalCartItems === 0) {
    return (
      <div
        className={styles.modal}
        onClick={(e) => {
          toggleCart();
        }}
      >
        <ComponentWrapper>
          <div
            className={styles.content}
            style={{ textAlign: 'center' }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Your cart is empty
          </div>
        </ComponentWrapper>
      </div>
    );
  }

  return (
    <div
      className={styles.modal}
      onClick={(e) => {
        toggleCart();
      }}
    >
      <ComponentWrapper>
        <div
          className={styles.content}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <h2>Cart({totalCartItems})</h2>
            <button onClick={emptyCart}>Remove All</button>
          </div>
          <div className={styles.items}>
            {Object.entries(cart).map(([key, value]) => (
              <CartItem
                key={value.name}
                name={value.name}
                quantity={value.quantity}
                price={value.price}
                thumbnail={value.thumbnail}
                slug={key}
              />
            ))}
          </div>
          {totalCartItems > 0 && (
            <>
              <div className={styles.total}>
                <div>TOTAL </div>
                <div>$ {formattedTotal}</div>
              </div>
              <LinkButton
                URL={'checkout/'}
                style={'orange'}
                text="CHECKOUT"
                isFullWidth={true}
                toggle={toggleCart}
              />
            </>
          )}
        </div>
      </ComponentWrapper>
    </div>
  );
}
