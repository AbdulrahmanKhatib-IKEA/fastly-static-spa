import React from 'react';
import IngkaAccordion, {
  AccordionItem as IngkaAccordionItem,
  AccordionProps,
  AccordionItemProps,
} from '@ingka/accordion';

export const Accordion = (props: AccordionProps) => {
  return <IngkaAccordion {...props} />;
};

export const AccordionItem = (props: AccordionItemProps) => {
  return <IngkaAccordionItem {...props} ref={undefined} />;
};
