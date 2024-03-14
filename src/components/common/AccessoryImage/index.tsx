import React from 'react';
import { baseUrl } from 'src/components/constants';

// Style
import * as S from './style';

interface AccessoryImageProps {
  value: number;
}

const AccessoryImage = ({ value }: AccessoryImageProps) => {
  const imgSrc = value > 8 ? `${baseUrl}/AccAncient.png` : `${baseUrl}/AccRelic.png`;
  const bgImg = value > 8 ? `${baseUrl}/BGAncient.png` : `${baseUrl}/BGRelic.png`;

  return (
    <S.AccessoryImage $bgImg={bgImg}>
      <img src={imgSrc} alt="" />
    </S.AccessoryImage>
  );
};

export default AccessoryImage;
