"use client";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../store/store';

import {
  PriceModule,
  Text,
  Choice,
  ChoiceItem,
  InputField,
  FormField,
  QuantityStepper,
  Button,
} from '../skapa'

import {
  checkoutButton,
  cardDescription,
  giftcardPriceModuleDefaults as priceModule,
  priceChoicesDefaults as choiceItems,
  quantityStepperDefaults as quantityStepper,
  giftcardText as giftCardText,
} from './cardValues';

import './index.scss';


const CardSlector = () => {

  const validationDefault = {
    shouldValidate: false,
    isValid: false,
    error: { msg: '', id: '' },
  };

  const [validation, setValidation] = useState(validationDefault);
  const [cardAmount, setCardAmount] = useState({inputField: '', choice: ''});

  // retrieve and update data in the state store
  const quantity = useStore((state) => state.quantity);
  const amount = useStore((state) => state.amount);
  const setAmount = useStore((state) => state.updateAmount)
  const setQuantity = useStore((state) => state.updateQuantity)

  const handleChange = (id: string, value: string) => {
    setValidation(validationDefault);
    if (id === 'inputField'){
      const validAmount = /^[0-9]+$/;
      if (!validAmount.test(value)){
        const validationError = {
          ...validationDefault,
          shouldValidate: true,
          isValid: false,
          error: {
            msg: 'enter only numbers',
            id: 'amount-error',
          },
        };
        setValidation(validationError);
      }
      setCardAmount({['inputField']:value, ['choice']: ''});
      return;
    } else {
      setCardAmount({['inputField']: '', ['choice']:value});
    }
  }

  const checkout = () => {
    setAmount(cardAmount.inputField ? cardAmount.inputField : cardAmount.choice);
  }

  return (
    <div className="card-details">
      <PriceModule {...priceModule} />
      <Text tagName="p" bodySize="m">
        {giftCardText}
      </Text>

      <Choice className="custom-choice-items" deselectable={true}>
        {choiceItems.map((item) => (
          <ChoiceItem 
            className="custom-choice-item" 
            onClick={() => handleChange('choiceItem', item.value as string)}
            key={item.id} 
            {...item}
          />
        ))}
      </Choice>

      <FormField
        shouldValidate={validation.shouldValidate}
        valid={validation.isValid}
        validation={validation.error}
      >
        <InputField
          id="preferred"
          type="number"
          prefixLabel="$"
          label="Enter a preferred amount"
          value={cardAmount.inputField}
          /* onChange={handleChange} */
          onChange={(e) => handleChange('inputField', e.target.value)}
        />
      </FormField>

      <QuantityStepper {...quantityStepper} />

      <div className="btn-wrapper">
        <Link to="/checkout">
          <Button type="emphasised" text={checkoutButton} onClick={checkout}/>
        </Link>
      </div>

      <div className="card-specs">
        {cardDescription.map((item) => (
          <div key={item} className="card-specs-item">
            <Text headingSize="xs">{item}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlector;