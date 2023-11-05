import React from 'react';
import IngkaQuantityStepper, {
  QuantityStepperProps,
} from '@ingka/quantity-stepper';

export const QuantityStepper: React.FC<QuantityStepperProps> = (props, ref) => {
  return <IngkaQuantityStepper {...props} ref={ref} />;
};
