
import React from 'react';

import IngkaChoice, {
  ChoiceProps,
  ChoiceItem as IngkaChoiceItem,
  ChoiceItemProps,
} from '@ingka/choice';

export const Choice = (props: ChoiceProps) => (
  <IngkaChoice {...props}  />
);

export const ChoiceItem = (props: ChoiceItemProps) => (
  <IngkaChoiceItem {...props}  />
);
