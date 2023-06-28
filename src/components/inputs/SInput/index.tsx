import React from 'react';

// Style
import * as S from './style';
import { combatEngravingKeys } from 'src/algo/engravings';

interface Props {
  name: null | string;
  onChange: (name: string, value: number) => void;
  value: number;
}

const SInput = ({ name, value, onChange }: Props) => {
  const options = combatEngravingKeys;

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, value);
  };

  const onNodeChange = (idx: number) => {
    if (name) {
      onChange(name, idx + 1);
    } else {
      alert('Select an engraving first!');
    }
  };

  return (
    <S.SInput>
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
          {[...Array(10)].map((_v, idx) => {
            // idx 0 - 9
            return (
              <img
                key={idx + 1}
                onClick={() => onNodeChange(idx)}
                src={value > idx ? '/engravings/StoneNodeFull.jpg' : '/engravings/StoneNodeEmpty.jpg'}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </S.SInput>
  );
};

export default SInput;
