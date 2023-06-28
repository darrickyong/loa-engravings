import React from 'react';
import { allEngravingKeys } from 'src/algo/engravings';

// Style
import * as S from './style';

interface Props {
  name: null | string;
  onChange: (name: string, value: number) => void;
  value: number;
}

const EInput = ({ name, value, onChange }: Props) => {
  const options = allEngravingKeys;

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
    <S.EInput value={value}>
      <div className="engrImg">
        <img src={`/engravings/${name}.webp`} alt=""></img>
      </div>
      <div className="engrCol">
        <div>
          <select onChange={onSelectChange} value={name ? name : 'Select one'}>
            <option disabled>Select one</option>
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        </div>
        <div className="levels">
          <div className="level">
            <div className="levelTitle1">Level 1</div>
            <div className="levelNode">
              {[...Array(5)].map((_v, idx) => {
                // idx 0 - 4
                const amt = value >= idx + 1 ? 5 : idx;
                return (
                  <img
                    key={idx + 1}
                    onClick={() => onNodeChange(idx)}
                    src={amt > idx ? '/engravings/EngravingNodeFull.png' : '/engravings/EngravingNodeEmpty.png'}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="level">
            <div className="levelTitle2">Level 2</div>
            <div className="levelNode">
              {[...Array(5)].map((_v, idx) => {
                // idx 0 - 4
                const amt = value >= idx + 5 + 1 ? 10 : idx;
                return (
                  <img
                    key={idx + 1}
                    onClick={() => onNodeChange(idx + 5)}
                    src={amt > idx ? '/engravings/EngravingNodeFull.png' : '/engravings/EngravingNodeEmpty.png'}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="level">
            <div className="levelTitle3">Level 3</div>
            <div className="levelNode">
              {[...Array(5)].map((_v, idx) => {
                // idx 0 - 4
                const amt = value >= idx + 10 + 1 ? 15 : idx;
                return (
                  <img
                    key={idx + 1}
                    onClick={() => onNodeChange(idx + 10)}
                    src={amt > idx ? '/engravings/EngravingNodeFull.png' : '/engravings/EngravingNodeEmpty.png'}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </S.EInput>
  );
};

export default EInput;
