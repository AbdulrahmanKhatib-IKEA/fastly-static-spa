import React from 'react';
import IngkaInputField, { InputFieldProps } from '@ingka/input-field';

export const InputField: React.FC<InputFieldProps & { ref?: undefined }> = (
  props
) => {
  return <IngkaInputField {...props} />;
};
