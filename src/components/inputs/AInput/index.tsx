import React from 'react';

// Style
import * as S from './style';
import { allEngravingKeys } from 'src/algo/engravings';
import EngravingImage from 'src/components/common/EngravingImage';
import EngravingSelector from 'src/components/common/EngravingSelector';

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
  disabled?: boolean;
  onChange: ({ eng, name, value }: AInputOnChange) => void;
}

const AInput = ({ accessory, index, onChange, disabled = false }: Props) => {
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

  const onMouseDown = (e: React.MouseEvent<HTMLSelectElement>) => {
    if (disabled) e.preventDefault();
  };

  return (
    <S.AInput disabled={disabled}>
      <div className="title">Accessory {index + 1}</div>

      

      <div className="eng1">
        <EngravingImage name={eng1Name} onClick={() => resetNode('eng1')} scale="0.5" />
        <div className="engrSelect">
          <EngravingSelector
            className="selectEngr"
            onChange={(e) => onNameChange(e, 'eng1', eng1Value)}
            name={eng1Name}
            options={options}
          />
          <select
            className="selectQty"
            onChange={(e) => onNodeChange(e, 'eng1', eng1Name)}
            onMouseDown={onMouseDown}
            value={eng1Value ? eng1Value : 'Qty'}
          >
            <option disabled>Qty</option>
            {primaryValueOptions.map((option, idx) => (
              <option key={idx} value={option}>{`+ ${option}`}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="eng2">
        <EngravingImage name={eng2Name} onClick={() => resetNode('eng2')} scale="0.5" />
        <div className="engrSelect">
          <EngravingSelector
            className="selectEngr"
            onChange={(e) => onNameChange(e, 'eng2', eng2Value)}
            name={eng2Name}
            options={options}
          />

          <select
            className="selectQty"
            onChange={(e) => onNodeChange(e, 'eng2', eng2Name)}
            onMouseDown={onMouseDown}
            value={eng2Value ? eng2Value : 'Qty'}
          >
            <option disabled>Qty</option>
            {secondaryValueOptions.map((option, idx) => (
              <option key={idx} value={option}>{`+ ${option}`}</option>
            ))}
          </select>
        </div>
      </div>

    </S.AInput>
  );
};

export default AInput;
