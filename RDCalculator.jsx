import React, { useState } from 'react';

function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [investmentTenure, setInvestmentTenure] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateMaturityAmount = () => {
    const totalMonths = investmentTenure * 12;
    const interestRatePerMonth = annualInterestRate / 12 / 100;
    let maturityVal = 0;

    for (let i = 1; i <= totalMonths; i++) {
      maturityVal = (maturityVal + monthlyDeposit) * (1 + interestRatePerMonth);
    }

    setMaturityAmount(maturityVal.toFixed(2));
  };

  return (
    <div>
      <h1>Recurring Deposit Calculator</h1>
      <div>
        <label>Monthly Deposit Amount (₹)</label>
        <input
          type="number"
          value={monthlyDeposit}
          onChange={(e) => setMonthlyDeposit(e.target.value)}
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

export default RDCalculator;
