'use client';
import { useState, useEffect } from 'react';
import Billing from '../Billing';
import Summary from '../Summary/Summary';

export default function CheckoutLayout() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: '',
    eMoneyNumber: '',
    eMoneyPin: '',
  });

  const [validation, setValidation] = useState({
    name: true,
    email: true,
    phone: true,
    address: true,
    zip: true,
    city: true,
    country: true,
    payment: true,
    eMoneyNumber: true,
    eMoneyPin: true,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.type === 'text' || e.target.type === 'email')
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
  }

  function validateFormInputs() {
    // Validate name
    if (form.name.length < 3) {
      setValidation((prev) => ({
        ...prev,
        name: false,
      }));
    } else {
      setValidation((prev) => ({
        ...prev,
        name: true,
      }));
    }

    // Validate email
    if (!form.email.includes('@')) {
      setValidation((prev) => ({
        ...prev,
        email: false,
      }));
    } else {
      setValidation((prev) => ({
        ...prev,
        email: true,
      }));
    }
  }

  function areInputsValid(): boolean {
    const allValid = Object.values(validation).every((item) => {
      return item === true;
    });

    console.log(allValid);

    if (allValid) {
      return true;
    }

    return false;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    validateFormInputs();

    if (areInputsValid()) {
      console.log('The form is valid!!!');
      return;
    }
    console.log('invalid form');
  }

  return (
    <section>
      <form noValidate onSubmit={handleSubmit} id="checkout-form">
        <Billing
          formState={form}
          validation={validation}
          handleChange={handleChange}
        />
      </form>
      <Summary />
      <button onClick={() => console.log(validation, areInputsValid())}>
        Log Validation
      </button>
    </section>
  );
}

export interface CheckoutFormProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  payment: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

export interface CheckoutValidationProps {
  name: boolean;
  email: boolean;
  phone: boolean;
  address: boolean;
  zip: boolean;
  city: boolean;
  country: boolean;
  payment: boolean;
  eMoneyNumber: boolean;
  eMoneyPin: boolean;
}
