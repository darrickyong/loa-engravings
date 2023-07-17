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
import { Accessory, EngravingBook, RequiredEngravings, RequiredNodes, Stone } from 'src/algo/main';
// import { isNull } from 'lodash';

const EngravingCalculator = () => {
  const [step, setStep] = useState(0);

  const [useAncients, setUseAncients] = useState(false);

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

  // Accessory Input
  const [accEngravings, setAccEngravings] = useState<
    { eng1: { name: null | string; value: number }; eng2: { name: null | string; value: number } }[]
  >([
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
    {
      eng1: { name: null, value: 0 },
      eng2: { name: null, value: 0 },
    },
  ]);

  const formatRequiredNodes = () => {
    const requiredNodes: RequiredNodes = { total: 0, nodes: [] };
    standardEngravings.forEach((engraving) => {
      const { value } = engraving;
      requiredNodes.total += value;
      if (value) {
        requiredNodes.nodes.push(engraving as RequiredEngravings);
      }
    });
    return requiredNodes;
  };

  const formatStoneNodes = () => {
    return { eng1: stoneEngravings[0], eng2: stoneEngravings[1] } as Stone;
  };

  const formatBookNodes = () => {
    return bookEngravings as [EngravingBook, EngravingBook];
  };

  const formatAccNodes = () => {
    const existingAcc: Accessory[] = [];
    accEngravings.forEach((acc) => {
      const { name: eng1Name, value: eng1Value } = acc.eng1;
      const { name: eng2Name, value: eng2Value } = acc.eng2;
      if ((eng1Name && eng1Value) || (eng2Name && eng2Value)) {
        existingAcc.push(acc as Accessory);
      }
    });
    console.log(existingAcc);
    return existingAcc;
  };

  const isNextDisabled = () => {
    switch (step) {
      case 0:
        return false;
      case 1:
        return false;
      // const { total, nodes } = formatRequiredNodes();
      // return total < 60 || nodes.length < 4;
      case 2:
        return false;
      // const { eng1, eng2 } = formatStoneNodes();
      // return eng1.name === null && eng2.name === null ;
      case 3:
        return false;
        // const [eng1, eng2] = formatBookNodes();
        // return isNull(eng1.name) || isNull(eng2.name) || eng1.value === 0 || eng2.value === 0;
      case 4:
        return false;
      default:
        return false;
    }
  };

  const renderBody = () => {
    switch (step) {
      case 0:
        return <Intro />;
      case 1:
        return <EngravingInput standardEngravings={standardEngravings} setStandardEngravings={setStandardEngravings} />;
      case 2:
        return <StoneInput stoneEngravings={stoneEngravings} setStoneEngravings={setStoneEngravings} />;
      case 3:
        return <BookInput bookEngravings={bookEngravings} setBookEngravings={setBookEngravings} />;
      case 4:
        return (
          <AccessoryInput
            accEngravings={accEngravings}
            setAccEngravings={setAccEngravings}
            setUseAncients={setUseAncients}
            useAncients={useAncients}
          />
        );
      case 5:
        return (
          <Results
            standardEngravings={formatRequiredNodes()}
            stoneEngravings={formatStoneNodes()}
            bookEngravings={formatBookNodes()}
            accEngravings={formatAccNodes()}
            useAncients={useAncients}
          />
        );
      default:
        return null;
    }
  };

  return (
    <S.EngravingCalculator>
      <Header />
      {renderBody()}
      <Footer step={step} setStep={setStep} isNextDisabled={isNextDisabled()} />
    </S.EngravingCalculator>
  );
};

export default EngravingCalculator;
