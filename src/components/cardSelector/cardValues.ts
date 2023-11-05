import {
  PriceModuleProps,
  PriceModuleCurrentPriceProps,
} from '@ingka/price-module';
import { ChoiceItemProps } from '@ingka/choice';
import { QuantityStepperProps } from '@ingka/quantity-stepper';

export const priceDefaults: PriceModuleCurrentPriceProps = {
  integerValue: '25',
  decimalValue: '00',
  decimalSign: ',',
  currencyLabel: '$',
};

export const giftcardPriceModuleDefaults: PriceModuleProps = {
  currentPriceProps: priceDefaults,
  productName: 'IKEA Gift Card',
  productDescription: 'Digital Gift Card',
};

/* export const priceChoicesDefaults: ChoiceItemProps[] = [
  { id: 'choice-1', title: '$ 25', value: '25' },
  { id: 'choice-2', title: '$ 50', value: '50' },
  { id: 'choice-3', title: '$ 75', value: '75' },
  { id: 'choice-4', title: '$ 100', value: '100' },
]; */

export const priceChoicesDefaults: ChoiceItemProps[] = [
  { id: 'choice-1', value: '25', selected: false },
  { id: 'choice-2', value: '50', selected: false },
  { id: 'choice-3', value: '75', selected: false },
  { id: 'choice-4', value: '100', selected: false },
];


export const quantityStepperDefaults: QuantityStepperProps = {
  minVal: 0,
  maxVal: 10,
  ariaDescribedBy:
    'Type in a number or use arrow up or arrow down to change the quantity',
  ariaDescribedById: 'ariaId',
};

export const giftcardText =
  'IKEA Gift cards are a convenient last-minute gift option, as they can be sent directly to e-mail, or printed out for hand delivery.';

export const checkoutButton = 'Continue to checkout';

export const personalizeButton = 'Personalize your gift card';

export const cardDescription = [
  'Sent directly to e-mail',
  'Delivered Immediately',
  'Personalize for a memorable gift',
];
