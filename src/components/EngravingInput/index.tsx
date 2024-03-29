import React from 'react';
import EInput from '../inputs/EInput';

// Style
import * as S from './style';
import { engravingOnChangeProps } from 'types/types';
import { ENGRAVING_HEADING } from '../constants';

interface Props {
  standardEngravings: {
    name: null | string;
    value: number;
  }[];
  setStandardEngravings: React.Dispatch<
    React.SetStateAction<
      {
        name: null | string;
        value: number;
      }[]
    >
  >;
}

const EngravingInput = ({ standardEngravings, setStandardEngravings }: Props) => {
  const engravingOnChange = ({ index, name, value }: engravingOnChangeProps) => {
    const newEngravings = [...standardEngravings];
    newEngravings[index].name = name;
    newEngravings[index].value = value;
    setStandardEngravings(newEngravings);
  };

  return (
    <S.EngravingInput>
      <h2>{ENGRAVING_HEADING}</h2>
      {standardEngravings.map((engraving, index) => {
        const { name, value } = engraving;
        return (
          <EInput
            key={index}
            name={name}
            onChange={(name, value) => engravingOnChange({ name, value, index })}
            value={value}
          />
        );
      })}
    </S.EngravingInput>
  );
};

export default EngravingInput;
