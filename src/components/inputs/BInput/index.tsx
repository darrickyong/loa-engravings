import React from 'react';

// Style
import * as S from './style';
import { allEngravingKeys } from 'src/algo/engravings';

interface Props {
  name: null | string;
  onChange: (name: string, value: number) => void;
  value: number;
}

const BInput = ({ name, value, onChange }: Props) => {
  const options = allEngravingKeys;

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, value);
  };

  const onNodeChange = (value: number) => {
    if (name) {
      onChange(name, value);
    } else {
      alert('Select an engraving first!');
    }
  };

  return (
    <S.BInput>
      <div className="engrImg">
        <img src={`/engravings/${name}.webp`} alt=""></img>
      </div>
      <div className="engrCol">
        <div className="title">
          <select onChange={onSelectChange} value={name ? name : 'Select one'}>
            <option disabled>Select one</option>
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
          {value ? <div className="counter">{`x${value}`}</div> : null}
        </div>
        <div className="level">
          <div className={`purple ${value === 9 ? 'selected' : ''}`} onClick={() => onNodeChange(9)}></div>

          <div className={`gold ${value === 12 ? 'selected' : ''}`} onClick={() => onNodeChange(12)}></div>
        </div>
      </div>
    </S.BInput>
  );
};

export default BInput;
