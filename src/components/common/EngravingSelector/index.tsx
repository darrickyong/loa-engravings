import React from 'react';

// Style
import * as S from './style'

interface EngravingSelectorProps {
  name: null | string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const EngravingSelector = ({ name, onChange, options }: EngravingSelectorProps) => {

  return (
    <S.EngravingSelector onChange={onChange} value={name ? name : 'Select Engraving...'}>
      <option disabled>Select Engraving...</option>
      {options.map((option, idx) => (
        <option key={idx}>{option}</option>
      ))}
    </S.EngravingSelector>
  );
};

export default EngravingSelector;
