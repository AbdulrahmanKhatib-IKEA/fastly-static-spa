"use client";

import React from 'react';
import { Accordion, AccordionItem, Text } from '../skapa';
import { termsAndConditions } from './defaultValues';

import './termsAndConditions.scss';

export const TermsAndConditions = () => {

  return (
    <div className="terms-conditions">
      <Accordion>
        <AccordionItem
          className="terms-conditions-item"
          id={'terms-conditions'}
          title="Terms and Conditions"
        >
          <Text
            dangerouslySetInnerHTML={{ __html: termsAndConditions }}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};
