"use client";

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Image, Carousel } from '../skapa';
import { images } from './defaultValues';
import variables from '@ingka/variables';
import './imagesGrid.scss';

export const ImagesGrid = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: variables.breakpointM });

  return (
    <>
      {!isTabletOrMobile ? (
        <div className="image-grid">
          {images.map((item) => (
            <Image key={item.id} src={item.uri} alt="giftcard" />
          ))}
        </div>
      ) : (
        <Carousel id="slideshow" isSlideShow={true}>
          {images.map((item) => (
            <Image key={item.id} src={item.uri} alt="giftcard" />
          ))}
        </Carousel>
      )}
    </>
  );
};
