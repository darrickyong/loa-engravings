import React, { useState } from 'react';
import EInput from '../inputs/EInput';

// Style
import * as S from './style';

export interface engravingOnChangeProps {
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
    { name: null, value: 0 },
    { name: null, value: 0 },
  ]);

  const engravingOnChange = ({ index, name, value }: engravingOnChangeProps) => {
    const newEngravings = [...standardEngravings];
    newEngravings[index].name = name;
    newEngravings[index].value = value;
    setStandardEngravings(newEngravings);
  };

  return (
    <S.EngravingInput>
      <div className="title">Select the engravings that you want...</div>
      {standardEngravings.map((engraving, idx) => {
        const { name, value } = engraving;
        return (
          <EInput
            key={idx}
            name={name}
            onChange={(name, value) => engravingOnChange({ name: name, value: value, index: idx })}
            setter={setStandardEngravings}
            value={value}
          />
        );
      })}
    </S.EngravingInput>
  );
};

export default EngravingInput;
