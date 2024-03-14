import React from 'react';
import { Accessory } from 'src/algo/main';

// Style
import * as S from './style';
import AccessoryImage from 'src/components/common/AccessoryImage';
import EngravingImage from 'src/components/common/EngravingImage';

interface Props {
  accessory: Accessory;
  index: number;
}

const AResult = ({ accessory, index }: Props) => {
  const {
    eng1: { name: eng1Name, value: eng1Value },
    eng2: { name: eng2Name, value: eng2Value },
  } = accessory;

  return (
    <S.AResultTooltip>
      <h3>Accessory {index + 1}</h3>

      <AccessoryImage value={eng1Value + eng2Value} />

      <div className="engravings">
        <div className="eng1">
          <EngravingImage name={eng1Name} scale="0.5" />
          <div className="engr">
            <div>{`${eng1Name}`}</div>
            <div>{`+${eng1Value}`}</div>
          </div>
        </div>

        <div className="eng2">
          <EngravingImage name={eng2Name} scale="0.5" />
          <div className="engr">
            <div>{`${eng2Name}`}</div>
            <div>{`+${eng2Value}`}</div>
          </div>
        </div>
      </div>
    </S.AResultTooltip>
  );
};

export default AResult;
