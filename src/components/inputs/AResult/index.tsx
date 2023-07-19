import React from 'react';

// Style
import * as S from './style';
interface Props {
  accessory: {
    eng1: {
      name: string;
      value: number;
    };
    eng2: {
      name: string;
      value: number;
    };
  };
  index: number;
}

const AResult = ({ accessory, index }: Props) => {
  const {
    eng1: { name: eng1Name, value: eng1Value },
    eng2: { name: eng2Name, value: eng2Value },
  } = accessory;

  return (
    <S.AResult>
      <div className="title">Accessory {index + 1}</div>
      <div className="eng1">
        <div className="engrImg">{eng1Name ? <img src={`/engravings/${eng1Name}.webp`} alt=""></img> : null}</div>
        <div className="engrSelect">
          <div className="selectEngr">{eng1Name}</div>
          <div className="selectEngr">{eng1Value}</div>
        </div>
      </div>

      <div className="eng2">
        <div className="engrImg">{eng2Name ? <img src={`/engravings/${eng2Name}.webp`} alt=""></img> : null}</div>
        <div className="engrSelect">
          <div className="selectEngr">{eng2Name}</div>
          <div className="selectEngr">{eng2Value}</div>
        </div>
      </div>
    </S.AResult>
  );
};

export default AResult;
