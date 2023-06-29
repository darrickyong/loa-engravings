import React from 'react';

// Style
import * as S from './style';

const Intro = () => {
  return (
    <S.Intro>
      Intro
      {/* {[...Array(20)].map((_v, idx1) => {
        return [...Array(256)].map((_v, idx2) => {
          return (
            <div>
              {`${idx1}-${idx2}`}
              <img src={`https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_${idx1}_${idx2}.png`} alt="" />
            </div>
          );
        })
      })} */}
    </S.Intro>
  );
};

export default Intro;
