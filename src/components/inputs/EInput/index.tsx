import React from 'react';
import { engravingKeys } from 'src/algo/engravings';

interface Props {
  name: null | string;
  onChange: (name: string, value: number) => void;
  removable: boolean;
  setter: React.Dispatch<
    React.SetStateAction<
      {
        name: null | string;
        value: number;
      }[]
    >
  >;
  value: number;
}

const EInput = ({ name, value, removable, onChange }: Props) => {
  const options = engravingKeys;

  return (
    <div>
      <img src={`/engravings/${name}.webp`} alt=""></img>
      <select
        defaultValue={'Select one'}
        onChange={(e) => {
          onChange(e.target.value, value);
        }}
      >
        <option disabled>Select one</option>
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      <div>{value}</div>
      {removable ? <div>X</div> : null}
    </div>
  );
};

export default EInput;
