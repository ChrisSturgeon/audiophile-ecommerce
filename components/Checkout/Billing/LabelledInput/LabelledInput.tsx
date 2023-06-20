import styles from './LabelledInput.module.css';
import { Dispatch, SetStateAction } from 'react';
import { CheckoutFormProps } from '../CheckoutLayout/CheckoutLayout';

interface Props {
  type: string;
  name: string;
  labelText: string;
  value: string;
  isValid: boolean;
  validationMessage: string;
  handleChange: (e: any) => void;
}

export default function LabelledInput({
  type,
  name,
  labelText,
  value,
  isValid,
  validationMessage,

  handleChange,
}: Props) {
  return (
    <div
      className={
        isValid
          ? styles.labelledInput
          : `${styles.labelledInput} ${styles.invalid}`
      }
    >
      <div>
        <label htmlFor={name}>{labelText}</label>
        {!isValid && <div>{validationMessage}</div>}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
