import React from 'react';

// Style
import * as S from './style';

interface EngravingSelectorProps {
  className?: string;
  name: null | string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const EngravingSelector = ({ className, name, onChange, options }: EngravingSelectorProps) => {

  return (
    <S.EngravingSelector
      className={className}
      onChange={onChange}
      value={name ? name : 'Select Engraving...'}
    >
      <option disabled>Select Engraving...</option>
      {options.map((option, idx) => (
        <option key={idx}>{option}</option>
      ))}
    </S.EngravingSelector>
  );
};

export default EngravingSelector;
