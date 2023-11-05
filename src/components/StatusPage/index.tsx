import React from 'react';
import { CardBenefits } from './cardBenefits';
import { ImagesGrid } from './imagesGrid';
import { TermsAndConditions } from './termsAndConditions'


const StatusPage = () => {

  console.log('shouldnt be visible on the browser console');
  
  return (
    <main>
      <div>
        <div className="cover-images">
          <ImagesGrid />
        </div>
        <div className='card-benefits'>
          <CardBenefits />
        </div>
        <div className='terms-conditions'>
          <TermsAndConditions />
        </div>
      </div>
    </main>
  )
}

export default StatusPage;