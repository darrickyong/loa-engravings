import React, { useState } from 'react';

// Style
import * as S from './style';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Accessory, EngravingBook, RequiredNodes, Stone, engravingAlgo } from 'src/algo/main';

interface Props {
  standardEngravings: RequiredNodes;
  stoneEngravings: Stone;
  bookEngravings: [EngravingBook, EngravingBook];
  accEngravings: Accessory[];
  useAncients: boolean;
}
const Results = ({ standardEngravings, stoneEngravings, bookEngravings, accEngravings, useAncients }: Props) => {
  const [calculating, setCalculating] = useState(true);

  const accessories = engravingAlgo({
    books: bookEngravings,
    requiredNodes: standardEngravings,
    stone: stoneEngravings,
    existingAcc: accEngravings,
    useAncients,
  });

  console.log(accessories);

  return (
    <S.Results>
      {calculating ? (
        <MagnifyingGlass
          visible
          height="500"
          width="500"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          // glassColor="#0a1526"
          // color="#f5efdc"
          glassColor="#f5efdc"
          color="#00ffff"
        />
      ) : null}
      <div onClick={() => setCalculating(!calculating)}>CLICK ME</div>
    </S.Results>
  );
};

export default Results;
