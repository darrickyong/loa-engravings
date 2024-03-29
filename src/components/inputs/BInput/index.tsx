import React from 'react';

// Style
import * as S from './style';
import { allEngravingKeys } from 'src/algo/engravings';
import { baseUrl } from 'src/components/constants';
import EngravingSelector from 'src/components/common/EngravingSelector';
import EngravingImage from 'src/components/common/EngravingImage';

interface Props {
  name: null | string;
  onChange: (name: string | null, value: number) => void;
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

  const resetNode = () => {
    onChange(null, 0);
  };

  return (
    <S.BInput>
      <EngravingImage name={name} onClick={resetNode} />
      <div className="engrCol">
        <div className="engrSelect">
          <EngravingSelector name={name} onChange={onSelectChange} options={options} />
          {value ? <div className="counter">{`x${value}`}</div> : null}
        </div>
        <div className="level">
          <div className={`${value === 3 ? 'selected' : 'unselected'}`}>
            <img src={`${baseUrl}/engravings/BookGreen.jpg`} onClick={() => onNodeChange(3)} alt="" />
          </div>
          <div className={`${value === 6 ? 'selected' : 'unselected'}`}>
            <img src={`${baseUrl}/engravings/BookBlue.jpg`} onClick={() => onNodeChange(6)} alt="" />
          </div>
          <div className={`${value === 9 ? 'selected' : 'unselected'}`}>
            <img src={`${baseUrl}/engravings/BookPurple.jpg`} onClick={() => onNodeChange(9)} alt="" />
          </div>
          <div className={`${value === 12 ? 'selected' : 'unselected'}`}>
            <img src={`${baseUrl}/engravings/BookGold.jpg`} onClick={() => onNodeChange(12)} alt="" />
          </div>
        </div>
      </div>
    </S.BInput>
  );
};

export default BInput;
