import React from 'react';
import { Accessory } from 'src/algo/main';
import AResult from '../AResult';

// Styles
import * as S from './style';

interface Props {
  accessoryList: Accessory[];
  existing: boolean;
}

const AResultList = ({ accessoryList, existing }: Props) => {
  const indexStart = existing ? 0 : 5 - accessoryList.length;
  return (
    <S.AResultList>
      {accessoryList.map((accessory, index) => {
        return <AResult key={index} accessory={accessory} index={indexStart + index} />;
      })}
    </S.AResultList>
  );
};

export default AResultList;
