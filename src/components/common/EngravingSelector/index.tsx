import React from 'react';

// Style
import * as S from './style';

interface EngravingSelectorProps {
  className?: string;
  disabled?: boolean;
  name: null | string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const EngravingSelector = ({ className, disabled, name, onChange, options }: EngravingSelectorProps) => {
  const onMouseDown = (e: React.MouseEvent<HTMLSelectElement>) => {
    if (disabled) e.preventDefault();
  };

  return (
    <S.EngravingSelector
      className={className}
      onChange={onChange}
      onMouseDown={onMouseDown}
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
