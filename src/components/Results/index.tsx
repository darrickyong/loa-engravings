import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Accessory, EngravingBook, RequiredNodes, Stone, engravingAlgo } from 'src/algo/main';

// Style
import * as S from './style';
import AResultList from '../inputs/AResultList';

interface Props {
  standardEngravings: RequiredNodes;
  stoneEngravings: Stone;
  bookEngravings: [EngravingBook, EngravingBook];
  accEngravings: Accessory[];
  useAncients: boolean;
}
const Results = ({ standardEngravings, stoneEngravings, bookEngravings, accEngravings, useAncients }: Props) => {
  const [calculating, setCalculating] = useState(true);
  const [accessories, setAccessories] = useState<null | Accessory[][]>(null);

  useEffect(() => {
    if (!accessories) {
      const accessories = engravingAlgo({
        books: bookEngravings,
        requiredNodes: standardEngravings,
        stone: stoneEngravings,
        existingAcc: accEngravings,
        useAncients,
      }) as Accessory[][];
      
      console.log(accessories);
      setTimeout(() => {
        setAccessories(accessories);
        setCalculating(false);
      }, 1000);
    }
  }, [accessories, setAccessories, standardEngravings, bookEngravings, stoneEngravings, accEngravings, useAncients]);

  const renderRes = () => {
    if (!accessories) return null;
    return (
      <S.ResultsList>
        <h2>Results</h2>
        {accessories.map((accessoryList, idx) => {
          return <AResultList key={idx} accessoryList={accessoryList} tooltipIdx={idx.toString()} />;
        })}
      </S.ResultsList>
    );
  };

  return (
    <S.Results>
      <h2>Existing Accessories</h2>
      <AResultList accessoryList={accEngravings} tooltipIdx="existing" />

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
      ) : (
        renderRes()
      )}
    </S.Results>
  );
};

export default Results;
