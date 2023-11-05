import { Link } from 'react-router-dom';
import React from 'react';
import { Text, Button } from '../skapa';
import { cardBenefitsItems } from './defaultValues';
import './cardBenefits.scss';

export const CardBenefits = () => {

  return (
    <div className="card-benefits">
      {cardBenefitsItems.map((item) => (
        <div key={item.title} className="card-benefits-element">
          <Text className="card-benefits-item-title" bodySize="xl">
            {item.title}
          </Text>
          <Text className="card-benefits-item-body" bodySize="xl">
            {item.body}
          </Text>
        </div>
      ))}
      <div className="btn-wrapper">
        <Link to="/giftcard">
          <Button type="emphasised" text="Buy Gift Card" />
        </Link>
      </div>
    </div>
  );
};
