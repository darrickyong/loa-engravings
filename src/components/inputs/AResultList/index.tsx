import React from 'react';
import { Accessory } from 'src/algo/main';
import AResult from '../AResult';

// Styles
import * as S from "./style";

interface Props {
  accessoryList: Accessory[];
  tooltipIdx: string;
}

const AResultList = ({ accessoryList, tooltipIdx }: Props) => {
  return (
    <S.AResultList>
      {accessoryList.map((accessory, index) => {
        return <AResult key={index} accessory={accessory} index={`${tooltipIdx}${index}`} />;
      })}
    </S.AResultList>
  );
};

export default AResultList;
