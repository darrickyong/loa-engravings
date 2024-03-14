import React, { useEffect, useState } from 'react';
import { Accessory, EngravingBook, RequiredNodes, Stone, engravingAlgo } from 'src/algo/main';
import AResultList from '../inputs/AResultList';
import LoadingGlass from '../LoadingGlass';

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
  const [message, setMessage] = useState('');
  const [accessories, setAccessories] = useState<null | Accessory[][]>(null);

  useEffect(() => {
    if (!accessories) {
      const { accFound, message, data } = engravingAlgo({
        books: bookEngravings,
        requiredNodes: standardEngravings,
        stone: stoneEngravings,
        existingAcc: accEngravings,
        useAncients,
      });

      console.log(accFound, message, data);
      setTimeout(() => {
        setAccessories(data);
        setMessage(message);
        setCalculating(false);
      }, 1000);
    }
  }, [accessories, setAccessories, standardEngravings, bookEngravings, stoneEngravings, accEngravings, useAncients]);

  const renderList = () => {
    return (
      <div className="results-list">
        {accessories!.map((accessoryList, idx) => {
          return <AResultList key={idx} accessoryList={accessoryList} existing={false} />;
        })}
      </div>
    );
  };

  const renderError = () => {
    return <h3>{`No Results Found: ${message}`}</h3>;
  };

  const renderRes = () => {
    return accessories!.length ? renderList() : renderError();
  };

  return (
    <S.Results>
      <div className="existing">
        <h2>Owned</h2>
        <AResultList accessoryList={accEngravings} existing />
      </div>
      <S.List>
        <h2>{`Results ${accessories && accessories.length ? `Found: ${accessories!.length}` : ''}`}</h2>
        {!accessories || calculating ? <LoadingGlass /> : renderRes()}
      </S.List>
    </S.Results>
  );
};

export default Results;
