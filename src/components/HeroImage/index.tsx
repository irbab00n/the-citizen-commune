import React from 'react';
import './HeroImage.scss';

interface HeroImageProps {
  [key: string]: any;
  imageURL: any;
}

const HeroImage = (props: HeroImageProps) => {
  const { imageURL } = props;
  return <img src={imageURL} className="hero-image" />;
};

export default HeroImage;
