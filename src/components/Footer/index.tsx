import React from 'react';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const Footer = ({ step, setStep }: Props) => {
  const renderPrev = () => {
    if (step === 0) return null;
    const prevStep = step - 1;
    return <button onClick={() => setStep(prevStep)}>Previous</button>;
  };

  const renderNext = () => {
    if (step === 5) return null;
    const nextStep = step + 1;
    return <button onClick={() => setStep(nextStep)}>Next</button>;
  };

  return (
    <div>
      {renderPrev()}
      {renderNext()}
    </div>
  );
};

export default Footer;
