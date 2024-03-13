import React from 'react';

// Style
import * as S from './style';
import { HOWTOUSE } from '../constants';

const Intro = () => {
  return (
    <S.Intro>
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

      <h2>Intro</h2>
      <ul>
        {HOWTOUSE.map((str) => (
          <li key={str}>{str}</li>
        ))}
      </ul>
    </S.Intro>
  );
};

export default Intro;
