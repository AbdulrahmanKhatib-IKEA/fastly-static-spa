import React from 'react';
import IngkaButton, { ButtonProps } from '@ingka/button';

export const Button = (props: ButtonProps) => {
  return <IngkaButton {...props} ref={undefined} />;
};
