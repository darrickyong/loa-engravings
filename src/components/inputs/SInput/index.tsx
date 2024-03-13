import React from 'react';

// Style
import * as S from './style';
import { combatEngravingKeys } from 'src/algo/engravings';
import { baseUrl } from 'src/components/constants';
import EngravingImage from 'src/components/common/EngravingImage';
import EngravingSelector from 'src/components/common/EngravingSelector';

interface Props {
  name: null | string;
  onChange: (name: string | null, value: number) => void;
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

  const resetNode = () => {
    onChange(null, 0);
  };

  return (
    <S.SInput>
      <EngravingImage name={name} onClick={resetNode} />
      <div className="engrCol">
        <div className="title">
          <EngravingSelector name={name} onChange={onSelectChange} options={options} />
          {value ? <div className="counter">{`x${value}`}</div> : null}
        </div>
        <div className="level">
          {[...Array(10)].map((_v, idx) => {
            // idx 0 - 9
            return (
              <img
                key={idx + 1}
                onClick={() => onNodeChange(idx)}
                src={
                  value > idx ? `${baseUrl}/engravings/StoneNodeFull.jpg` : `${baseUrl}/engravings/StoneNodeEmpty.jpg`
                }
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
