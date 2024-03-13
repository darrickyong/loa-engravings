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
  useAncients: boolean;
  setUseAncients: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccessoryInput = ({ accEngravings, setAccEngravings, setUseAncients, useAncients }: Props) => {
  const engravingOnChange = ({ eng, index, name, value }: accOnChangeProps) => {
    const newEngravings = [...accEngravings];
    newEngravings[index][eng].name = name;
    newEngravings[index][eng].value = value;
    setAccEngravings(newEngravings);
  };

  const flipUseAncients = () => {
    setUseAncients(!useAncients);
  };

  return (
    <S.AccInput>
      <div className="title">Select the accessories that you already have purchased...</div>
      <div className="accessories">
        {accEngravings.map((accessory, index) => {
          return (
            <AInput
              key={index}
              accessory={accessory}
              index={index}
              onChange={({ eng, name, value }) => engravingOnChange({ eng, index, name, value })}
            />
          );
        })}
      </div>
      <div className="useAncients">
        <input type="checkbox" onChange={flipUseAncients} checked={useAncients} />
        <label onClick={flipUseAncients}>Calculate suggestions using ancient accessories?</label>
      </div>
    </S.AccInput>
  );
};

export default AccessoryInput;
