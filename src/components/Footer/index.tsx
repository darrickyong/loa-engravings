import React from 'react';

// Style
import * as S from './style';

interface Props {
  isNextDisabled: boolean;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const Footer = ({ isNextDisabled, step, setStep }: Props) => {
  const renderPrev = () => {
    if (step === 0) return null;
    const prevStep = step - 1;
    return <div onClick={() => setStep(prevStep)}>Previous</div>;
  };

  const renderNext = () => {
    if (step === 5) return null;
    const nextStep = isNextDisabled ? step : step + 1;
    return <div onClick={() => setStep(nextStep)}>{step === 0 ? 'Start' : 'Next'}</div>;
  };

  return (
    <S.Footer>
      {renderPrev()}
      {renderNext()}
    </S.Footer>
  );
};

export default Footer;
