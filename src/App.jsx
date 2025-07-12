import React, { useState, useEffect } from 'react';
import './App.css';
import { DataWrapper } from './assets/complements/DataWrapper';
import { PercentageButton } from './assets/complements/PercentageButton';
import { Custom } from './assets/complements/Custom';
import { AmountText } from './assets/complements/TextAmount';
import { TotalAmount } from './assets/complements/TotalAmount';
import { ResultTxt } from './assets/complements/ResultTxt';
import { ResetButton } from './assets/complements/ResetButton';
import { GeneralWrapper } from './assets/complements/GeneralWrapper';
import { ResultWrapper } from './assets/complements/ResultWrapper';
import { Header } from './assets/complements/Header';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [percentageValue, setPercentageValue] = useState(0);
  const [peopleCount, setPeopleCount] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [custom, customValue] = useState(0);

  const handleTip = (value) => {
    setPercentageValue(value);
  };

  const handleCustomTip = (value) => {
    setPercentageValue(value);
  };

  const resetAll = () => {
    setBillAmount(0);
    setPeopleCount(1);
    setPercentageValue(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  const computeTotals = () => {
    if (percentageValue !== 0 && billAmount !== 0 && peopleCount > 0) {
      const tip = (billAmount * (percentageValue / 100)) / peopleCount;
      const total = (billAmount / peopleCount) + tip;
      setTipAmount(tip);
      setTotalAmount(total);
    }
  };

  useEffect(() => {
    computeTotals();
  }, [billAmount, percentageValue, peopleCount]);

  return (
    <>
    <span style={{
        display: 'block',
        textAlign: 'center',
        fontSize: '6rem',
        fontWeight: '600',
        margin: '0.5rem 0',
        color: '#333'
      }}>
        10.4 Team Sprint Report: Deploy a Web App on GKE
      </span>
      <Header />
      <GeneralWrapper>
        <DataWrapper
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          percentageValue={percentageValue}
          handleTip={handleTip}
          peopleCount={peopleCount}
          setPeopleCount={setPeopleCount}
        >
          <PercentageButton onClick={handleTip} selectedTip={percentageValue}>
            <Custom handleCustomTip={handleCustomTip} />
          </PercentageButton>
        </DataWrapper>
        <ResultWrapper>
          <ResultTxt>
            <AmountText tipAmount={tipAmount} />
            <TotalAmount totalAmount={totalAmount} />
          </ResultTxt>
          <ResetButton onClick={resetAll} />
        </ResultWrapper>
      </GeneralWrapper>
    </>
  );
}

export default App;