import React, { useState } from 'react';

function NSCCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [investmentTenure, setInvestmentTenure] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateMaturityAmount = () => {
    const rateOfInterest = interestRate / 100;
    const timePeriod = investmentTenure;

    const maturityValue = principalAmount * Math.pow(1 + rateOfInterest, timePeriod);

    setMaturityAmount(maturityValue.toFixed(2));
  };

  return (
    <div>
      <h1>NSC Calculator</h1>
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
        <label>Investment Tenure (years)</label>
        <input
          type="number"
          value={investmentTenure}
          onChange={(e) => setInvestmentTenure(e.target.value)}
        />
      </div>
      <button onClick={calculateMaturityAmount}>Calculate</button>
      <div>
        <h2>Maturity Amount: ₹{maturityAmount}</h2>
      </div>
    </div>
  );
}

export default NSCCalculator;
