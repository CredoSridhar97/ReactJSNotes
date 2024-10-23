import React, { useState } from 'react';

function CompoundInterestCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [compoundingFrequency, setCompoundingFrequency] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState(0);

  const calculateCompoundInterest = () => {
    const rateOfInterest = interestRate / 100;
    const compoundFrequencyPerYear = compoundingFrequency;
    const timeInYears = timePeriod;
    const totalCompounds = compoundFrequencyPerYear * timeInYears;
    const compoundedInterest = principalAmount * Math.pow(1 + rateOfInterest / compoundFrequencyPerYear, totalCompounds);
    const interestEarned = compoundedInterest - principalAmount;

    setCompoundInterest(interestEarned.toFixed(2));
  };

  return (
    <div>
      <h1>Compound Interest Calculator</h1>
      <div>
        <label>Principal Amount (₹)</label>
        <input
          type="number"
          value={principalAmount}
          onChange={(e) => setPrincipalAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Compounding Frequency (per year)</label>
        <input
          type="number"
          value={compoundingFrequency}
          onChange={(e) => setCompoundingFrequency(e.target.value)}
        />
      </div>
      <div>
        <label>Time Period (years)</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        />
      </div>
      <button onClick={calculateCompoundInterest}>Calculate</button>
      <div>
        <h2>Compound Interest: ₹{compoundInterest}</h2>
      </div>
    </div>
  );
}

export default CompoundInterestCalculator;
