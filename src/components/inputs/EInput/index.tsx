import React from 'react';

// Style
import * as S from './style';
import { baseUrl } from 'src/components/constants';
import EngravingImage from 'src/components/common/EngravingImage';
import EngravingSelector from 'src/components/common/EngravingSelector';
import { allEngravingKeys } from 'src/algo/engravings';

interface Props {
  name: null | string;
  onChange: (name: string | null, value: number) => void;
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

  const resetNode = () => {
    onChange(null, 0);
  };

  return (
    <S.EInput value={value}>
      <EngravingImage name={name} onClick={resetNode} />
      <div className="engrCol">
        <EngravingSelector name={name} onChange={onSelectChange} options={options} />
        <div className="levels">
          <div className="level" onClick={() => onNodeChange(4)}>
            <div className="levelTitle1">Level 1</div>
            <div className="levelNode">
              {[...Array(5)].map((_v, idx) => {
                // idx 0 - 4
                const amt = value >= idx + 1 ? 5 : idx;
                return (
                  <img
                    key={idx + 1}
                    src={
                      amt > idx
                        ? `${baseUrl}/engravings/EngravingNodeFull.png`
                        : `${baseUrl}/engravings/EngravingNodeEmpty.png`
                    }
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="level" onClick={() => onNodeChange(9)}>
            <div className="levelTitle2">Level 2</div>
            <div className="levelNode">
              {[...Array(5)].map((_v, idx) => {
                // idx 5 - 9
                const amt = value >= idx + 5 + 1 ? 10 : idx;
                return (
                  <img
                    key={idx + 1}
                    src={
                      amt > idx
                        ? `${baseUrl}/engravings/EngravingNodeFull.png`
                        : `${baseUrl}/engravings/EngravingNodeEmpty.png`
                    }
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="level" onClick={() => onNodeChange(14)}>
            <div className="levelTitle3">Level 3</div>
            <div className="levelNode">
              {[...Array(5)].map((_v, idx) => {
                // idx 10 - 14
                const amt = value >= idx + 10 + 1 ? 15 : idx;
                return (
                  <img
                    key={idx + 1}
                    src={
                      amt > idx
                        ? `${baseUrl}/engravings/EngravingNodeFull.png`
                        : `${baseUrl}/engravings/EngravingNodeEmpty.png`
                    }
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
