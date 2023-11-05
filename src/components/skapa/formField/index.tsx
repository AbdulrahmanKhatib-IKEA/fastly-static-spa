import React from 'react';
import IngkaFormField, { FormFieldProps } from '@ingka/form-field';

type Props = {
  children: React.ReactNode;
} & FormFieldProps;

export const FormField = (props: Props) => {
  const { children } = props;
  return (
    <IngkaFormField  {...props}>
      {children}
    </IngkaFormField>
  );
};
