import styles from './Summary.module.css';

export default function Summary() {
  return (
    <div className={styles.summary}>
      <div>
        <button form="checkout-form" type="submit">
          Submit form
        </button>
      </div>
    </div>
  );
}
