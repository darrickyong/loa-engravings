import AccessoryInput from '../AccessoryInput';
import BookInput from '../BookInput';
import EngravingInput from '../EngravingInput';
import Footer from '../Footer';
import Header from '../Header';
import Intro from '../Intro';
import Results from '../Results';
import StoneInput from '../StoneInput';
import React, { useState } from 'react';

// Style
import * as S from './style';

const EngravingCalculator = () => {
  const [step, setStep] = useState(0);

  // EngravingsInput
  const [standardEngravings, setStandardEngravings] = useState<{ name: null | string; value: number }[]>([
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
    { name: null, value: 0 },
  ]);

  // Stone Input
  const [stoneEngravings, setStoneEngravings] = useState<{ name: null | string; value: number }[]>([
    { name: null, value: 0 },
    { name: null, value: 0 },
  ]);

  // Book Input
    const [bookEngravings, setBookEngravings] = useState<{ name: null | string; value: number }[]>([
      { name: null, value: 0 },
      { name: null, value: 0 },
    ]);

  const renderBody = () => {
    switch (step) {
      case 0:
        return <Intro />;
      case 1:
        return <EngravingInput standardEngravings={standardEngravings} setStandardEngravings={setStandardEngravings} />;
      case 2:
        return <StoneInput stoneEngravings={stoneEngravings} setStoneEngravings={setStoneEngravings} />;
      case 3:
        return <BookInput bookEngravings={bookEngravings} setBookEngravings={setBookEngravings}/>;
      case 4:
        return <AccessoryInput />;
      case 5:
        return <Results />;
      default:
        return null;
    }
  };
  return (
    <S.EngravingCalculator>
      <Header />
      {renderBody()}
      <Footer step={step} setStep={setStep} />
    </S.EngravingCalculator>
  );
};

export default EngravingCalculator;
