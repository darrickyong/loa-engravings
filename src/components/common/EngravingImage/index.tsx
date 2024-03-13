import React from 'react';
import { baseUrl } from 'src/components/constants';

// Style
import * as S from './style';

interface EngravingImageProps {
  onClick: () => void;
  name: null | string;
  scale?: string;
}
const EngravingImage = ({ name, onClick, scale = 'none' }: EngravingImageProps) => {
  return (
    <S.EngravingImage className="engrImg" onClick={onClick} scale={scale}>
      {name ? <img src={`${baseUrl}/engravings/${name}.webp`} alt=""></img> : null}
    </S.EngravingImage>
  );
};

export default EngravingImage;
