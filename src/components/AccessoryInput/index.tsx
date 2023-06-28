import React from 'react';

// Style
import * as S from './style';
import AInput from '../inputs/AInput';
import { accOnChangeProps } from 'types/types';

interface Props {
  accEngravings: {
    eng1: {
      name: null | string;
      value: number;
    };
    eng2: {
      name: null | string;
      value: number;
    };
  }[];
  setAccEngravings: React.Dispatch<
    React.SetStateAction<
      {
        eng1: {
          name: null | string;
          value: number;
        };
        eng2: {
          name: null | string;
          value: number;
        };
      }[]
    >
  >;
}

const AccessoryInput = ({ accEngravings, setAccEngravings }: Props) => {
  const engravingOnChange = ({ eng, index, name, value }: accOnChangeProps) => {
    const newEngravings = [...accEngravings];
    newEngravings[index][eng].name = name;
    newEngravings[index][eng].value = value;
    setAccEngravings(newEngravings);
  };

  return (
    <S.AccInput>
      <div className="title">Select the accessories that you have equipped...</div>
      <div className="accessories">
      {accEngravings.map((accessory, index) => {
        return <AInput key={index} accessory={accessory} index={index} onChange={({eng, name, value}) => engravingOnChange({ eng, index, name, value})}/>
      })}

      </div>
    </S.AccInput>
  );
};

export default AccessoryInput;
