import React from 'react';

// Style
import * as S from './style';
import { allEngravingKeys } from 'src/algo/engravings';

interface AInputOnChange {
  eng: 'eng1' | 'eng2';
  name: string | null;
  value: number;
}

interface Props {
  accessory: {
    eng1: {
      name: null | string;
      value: number;
    };
    eng2: {
      name: null | string;
      value: number;
    };
  };
  index: number;
  onChange: ({ eng, name, value }: AInputOnChange) => void;
}

const AInput = ({ accessory, index, onChange }: Props) => {
  const {
    eng1: { name: eng1Name, value: eng1Value },
    eng2: { name: eng2Name, value: eng2Value },
  } = accessory;
  const options = allEngravingKeys;
  const primaryValueOptions = [6, 5, 4, 3];
  const secondaryValueOptions = [3];

  const onNameChange = (e: React.ChangeEvent<HTMLSelectElement>, eng: 'eng1' | 'eng2', value: number) => {
    onChange({ eng, name: e.target.value, value });
  };

  const onNodeChange = (e: React.ChangeEvent<HTMLSelectElement>, eng: 'eng1' | 'eng2', name: string | null) => {
    if (name) {
      onChange({ eng, name, value: parseInt(e.target.value) });
    } else {
      alert('Select an engraving first!');
    }
  };

  const resetNode = (eng: 'eng1' | 'eng2') => {
    onChange({ eng, name: null, value: 0 });
  };

  return (
    <S.AInput>
      <div className="title">Accessory {index + 1}</div>
      <div className="eng1">
        <div className="engrImg" onClick={() => resetNode('eng1')}>
          {eng1Name ? <img src={`/engravings/${eng1Name}.webp`} alt=""></img> : null}
        </div>
        <div className="engrSelect">
          <select
            className="selectEngr"
            onChange={(e) => onNameChange(e, 'eng1', eng1Value)}
            value={eng1Name ? eng1Name : 'Select Engraving...'}
          >
            <option disabled>Select Engraving...</option>
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
          <select
            onChange={(e) => onNodeChange(e, 'eng1', eng1Name)}
            value={eng1Value ? eng1Value : 'Select Node Amount...'}
          >
            <option disabled>Select Node Amount...</option>
            {primaryValueOptions.map((option, idx) => (
              <option key={idx} value={option}>{`Node + ${option}`}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="eng2">
        <div className="engrImg" onClick={() => resetNode('eng2')}>
          {eng2Name ? <img src={`/engravings/${eng2Name}.webp`} alt=""></img> : null}
        </div>
        <div className="engrSelect">
          <select
            className="selectEngr"
            onChange={(e) => onNameChange(e, 'eng2', eng2Value)}
            value={eng2Name ? eng2Name : 'Select Engraving'}
          >
            <option disabled>Select Engraving</option>
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
          <select
            onChange={(e) => onNodeChange(e, 'eng2', eng2Name)}
            value={eng2Value ? eng2Value : 'Select Node Amount'}
          >
            <option disabled>Select Node Amount</option>
            {secondaryValueOptions.map((option, idx) => (
              <option key={idx} value={option}>{`Node + ${option}`}</option>
            ))}
          </select>
        </div>
      </div>
    </S.AInput>
  );
};

export default AInput;
