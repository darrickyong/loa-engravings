import AccessoryInput from '../AccessoryInput';
import BookInput from '../BookInput';
import EngravingInput from '../EngravingInput';
import Intro from '../Intro';
import Results from '../Results';
import StoneInput from '../StoneInput';
import React, { useState } from 'react';

const EngravingCalculator = () => {
  // const [step, setStep] = useState(0);
  const [step] = useState(0);
  switch (step) {
    case 0:
      return <Intro />;
    case 1:
      return <EngravingInput />;
    case 2:
      return <StoneInput />;
    case 3:
      return <BookInput />;
    case 4:
      return <AccessoryInput />;
    case 5:
      return <Results />;
  }
  return <div>EngravingCalculator</div>;
};

export default EngravingCalculator;
