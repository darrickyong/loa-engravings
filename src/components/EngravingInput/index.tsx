import React, { useState } from 'react';
import EInput from '../inputs/EInput';

// Style
import * as S from './style';

export interface engravingOnChangeProps {
  type: 'standard' | 'additional';
  index: number;
  name: string;
  value: number;
}

const EngravingInput = () => {
  const [standardEngravings, setStandardEngravings] = useState<{ name: null | string; value: number }[]>([
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
  ]);

  const [additionalEngravings, setAdditionalEngravings] = useState<{ name: null | string; value: number }[]>([]);

  const engravingOnChange = ({ type, index, name, value }: engravingOnChangeProps) => {
    if (type === 'standard') {
      const newEngravings = [...standardEngravings];
      newEngravings[index].name = name;
      newEngravings[index].value = value;
      setStandardEngravings(newEngravings);
    } else {
      const newEngravings = [...additionalEngravings];
      newEngravings[index].name = name;
      newEngravings[index].value = value;
      setAdditionalEngravings(newEngravings);
    }
  };

  const addAdditionalEngravings = () => {
    if (additionalEngravings.length < 2) {
      setAdditionalEngravings([...additionalEngravings, { name: null, value: 0 }]);
    }
  };

  const removeAdditionalEngravings = (idx: number) => {
    const newEngravings = [...additionalEngravings];
    newEngravings.splice(idx, 1);
    setAdditionalEngravings(newEngravings);
  };

  return (
    <S.EngravingInput>
      <div>Select the engravings that you want</div>
      {standardEngravings.map((engraving, idx) => {
        const { name, value } = engraving;
        return (
          <EInput
            key={idx}
            name={name}
            onChange={(name, value) => engravingOnChange({ name: name, value: value, type: 'standard', index: idx })}
            setter={setStandardEngravings}
            value={value}
          />
        );
      })}
      {additionalEngravings.map((engraving, idx) => {
        const { name, value } = engraving;
        return (
          <EInput
            key={idx}
            name={name}
            onChange={(name, value) => engravingOnChange({ name: name, value: value, type: 'additional', index: idx })}
            removable={() => removeAdditionalEngravings(idx)}
            setter={setAdditionalEngravings}
            value={value}
          />
        );
      })}
      {additionalEngravings.length < 2 ? <div onClick={addAdditionalEngravings}>+</div> : null}
    </S.EngravingInput>
  );
};

export default EngravingInput;
