import {
  CheckoutFormProps,
  CheckoutValidationProps,
} from './CheckoutLayout/CheckoutLayout';
import { Dispatch, SetStateAction } from 'react';
import LabelledInput from './LabelledInput/LabelledInput';

interface Props {
  formState: CheckoutFormProps;
  validation: CheckoutValidationProps;
  handleChange: (e: any) => void;
}

export default function Billing({
  formState,
  validation,
  handleChange,
}: Props) {
  return (
    <div>
      <h3>Billing Details</h3>
      <div className="labelledInput">
        <div>
          <label htmlFor="name">Name</label>
          {!validation.name && <div>Error</div>}
        </div>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={(e) => handleChange(e)}
          className={validation.name ? '' : 'error'}
        />
      </div>

      <LabelledInput
        type="email"
        name="email"
        labelText="email"
        value={formState.email}
        isValid={validation.email}
        validationMessage="Incorrect Format"
        handleChange={handleChange}
      />
    </div>
  );
}
