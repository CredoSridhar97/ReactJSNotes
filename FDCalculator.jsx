import React, { useState } from 'react';

function FDCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [investmentTenure, setInvestmentTenure] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateMaturityAmount = () => {
    const totalYears = investmentTenure;
    const interestRatePerYear = annualInterestRate / 100;
    const maturityVal = principalAmount * Math.pow(1 + interestRatePerYear, totalYears);

    setMaturityAmount(maturityVal.toFixed(2));
  };

  return (
    <div>
      <h1>Fixed Deposit Calculator</h1>
      <div>
        <label>Principal Amount (₹)</label>
        <input
          type="number"
          value={principalAmount}
          onChange={(e) => setPrincipalAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%)</label>
        <input
          type="number"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
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

export default FDCalculator;
