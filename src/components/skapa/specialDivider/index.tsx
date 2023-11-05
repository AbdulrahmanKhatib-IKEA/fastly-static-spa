import React from 'react';
import './specialDivider.scss';

export const SpecialDivider = () => {
  return (
    <div className={'special-divider'}>
      <hr className={'divider hr-vertical'} />
      OR
      <hr className={'divider hr-vertical'} />
    </div>
  );
};
