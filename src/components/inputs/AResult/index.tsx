import React from 'react';

// Style
import * as S from './style';
import { Tooltip } from 'react-tooltip';
import { Accessory } from 'src/algo/main';
import { baseUrl } from 'src/components/constants';
interface Props {
  accessory: Accessory
  index: string;
}

const AResult = ({ accessory, index }: Props) => {
  const {
    eng1: { name: eng1Name, value: eng1Value },
    eng2: { name: eng2Name, value: eng2Value },
  } = accessory;

  const imgSrc = eng1Value + eng2Value > 8 ? `${baseUrl}/AccAncient.png` : `${baseUrl}/AccRelic.png`;
  const bgImg = eng1Value + eng2Value > 8 ? `${baseUrl}/BGAncient.png` : `${baseUrl}/BGRelic.png`;

  const tooltip = (
    <Tooltip
      anchorSelect={`.anchor-${index}`}
      id={index}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
    >
      <div>{`${eng1Name} +${eng1Value}`}</div> <div>{`${eng2Name} +${eng2Value}`}</div>
    </Tooltip>
  );

  return (
    <S.AResultTooltip data-for={index} className={`anchor-${index}`} $bgImg={bgImg}>
      {tooltip}
      <div className="img-container">
        <img src={imgSrc} alt="" />
      </div>
    </S.AResultTooltip>
  );
};

export default AResult;
