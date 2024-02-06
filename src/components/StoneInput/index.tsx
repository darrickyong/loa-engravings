import React from 'react';
import SInput from '../inputs/SInput';

// Style
import * as S from './style';
import { engravingOnChangeProps } from 'types/types';

interface Props {
  stoneEngravings: {
    name: null | string;
    value: number;
  }[];
  setStoneEngravings: React.Dispatch<
    React.SetStateAction<
      {
        name: null | string;
        value: number;
      }[]
    >
  >;
}

const StoneInput = ({ stoneEngravings, setStoneEngravings }: Props) => {
  const engravingOnChange = ({ index, name, value }: engravingOnChangeProps) => {
    const newEngravings = [...stoneEngravings];
    newEngravings[index].name = name;
    newEngravings[index].value = value;
    setStoneEngravings(newEngravings);
  };

  return (
    <S.StoneInput>
      <h2>Select the stone that you have equipped...</h2>
      <div className="stoneBG">
        <div className="top"></div>
        <div className="bot">
          {stoneEngravings.map((engraving, index) => {
            const { name, value } = engraving;
            return (
              <SInput
                key={index}
                name={name}
                onChange={(name, value) => engravingOnChange({ name, value, index })}
                value={value}
              />
            );
          })}
        </div>
      </div>
    </S.StoneInput>
  );
};

export default StoneInput;
