import React, { useState } from 'react';

function NPSCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [investmentTenure, setInvestmentTenure] = useState(0);
  const [tier1MaturityAmount, setTier1MaturityAmount] = useState(0);
  const [tier2MaturityAmount, setTier2MaturityAmount] = useState(0);

  const calculateMaturityAmount = () => {
    const totalMonths = investmentTenure * 12;
    const interestRatePerMonth = annualInterestRate / 12 / 100;

    // Tier I Account
    const tier1MaturityVal = calculateMaturityValue(monthlyContribution, interestRatePerMonth, totalMonths);
    setTier1MaturityAmount(tier1MaturityVal.toFixed(2));

    // Tier II Account (Assuming no withdrawals)
    const tier2MaturityVal = calculateMaturityValue(monthlyContribution, interestRatePerMonth, totalMonths);
    setTier2MaturityAmount(tier2MaturityVal.toFixed(2));
  };

  const calculateMaturityValue = (contribution, interestRate, months) => {
    let maturityVal = 0;

    for (let i = 1; i <= months; i++) {
      maturityVal = (maturityVal + contribution) * (1 + interestRate);
    }

    return maturityVal;
  };

  return (
    <div>
      <h1>NPS Calculator</h1>
      <div>
        <label>Monthly Contribution (₹)</label>
        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(e.target.value)}
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
        <h2>Tier I Account Maturity Amount: ₹{tier1MaturityAmount}</h2>
        <h2>Tier II Account Maturity Amount: ₹{tier2MaturityAmount}</h2>
      </div>
    </div>
  );
}

export default NPSCalculator;
