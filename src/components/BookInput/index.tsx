import React from 'react';

// Style
import * as S from './style';
import BInput from '../inputs/BInput';
import { engravingOnChangeProps } from 'types/types';

interface Props {
  bookEngravings: {
    name: null | string;
    value: number;
  }[];
  setBookEngravings: React.Dispatch<
    React.SetStateAction<
      {
        name: null | string;
        value: number;
      }[]
    >
  >;
}

const BookInput = ({ bookEngravings, setBookEngravings }: Props) => {
  const engravingOnChange = ({ index, name, value }: engravingOnChangeProps) => {
    const newEngravings = [...bookEngravings];
    newEngravings[index].name = name;
    newEngravings[index].value = value;
    setBookEngravings(newEngravings);
  };

  return (
    <S.BookInput>
      <div className="title">Select the books that you have equipped...</div>
      <div className="books">
        {bookEngravings.map((engraving, index) => {
          const { name, value } = engraving;
          return (
            <BInput
              key={index}
              name={name}
              onChange={(name, value) => engravingOnChange({ name, value, index })}
              value={value}
            />
          );
        })}
      </div>
    </S.BookInput>
  );
};

export default BookInput;
