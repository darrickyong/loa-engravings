import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Accessory, EngravingBook, RequiredNodes, Stone, engravingAlgo } from 'src/algo/main';
import AResult from '../inputs/AResult';

// Style
import * as S from './style';

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

  // const accessories = engravingAlgo({
  //   books: bookEngravings,
  //   requiredNodes: standardEngravings,
  //   stone: stoneEngravings,
  //   existingAcc: accEngravings,
  //   useAncients,
  // }) as Accessory[][];

  useEffect(() => {
    if (!accessories) {
      setCalculating(false);
      setAccessories(
        engravingAlgo({
          requiredNodes: standardEngravings,
          books: bookEngravings,
          stone: stoneEngravings,
          existingAcc: accEngravings,
          useAncients,
        }) as Accessory[][]
      );
    }
  }, [accessories, setAccessories, standardEngravings, bookEngravings, stoneEngravings, accEngravings, useAncients]);

  const renderRes = () => {
    if (!accessories) return null;
    return (
      <div>
        {accessories.map((accessoryList, idx) => {
          return (
            <div key={idx}>
              {accessoryList.map((accessory, index) => {
                return <AResult key={index} accessory={accessory} index={index + accEngravings.length} />;
              })}
            </div>
          );
        })}
      </div>
    );
  };

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
      ) : (
        renderRes()
      )}
      <div onClick={() => setCalculating(!calculating)}>CLICK ME</div>
    </S.Results>
  );
};

export default Results;
