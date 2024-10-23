import React, { useState } from 'react';

function SIPCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateMaturityAmount = () => {
    const monthlyReturnRate = (annualReturnRate / 12) / 100;
    const totalMonths = investmentDuration * 12;
    const maturity = investmentAmount * (Math.pow(1 + monthlyReturnRate, totalMonths) - 1) / monthlyReturnRate * (1 + monthlyReturnRate);

    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div>
      <h1>SIP Calculator</h1>
      <div>
        <label>Investment Amount (₹)</label>
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Return Rate (%)</label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(e.target.value)}
        />
      </div>
      <div>
        <label>Investment Duration (years)</label>
        <input
          type="number"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
        />
      </div>
      <button onClick={calculateMaturityAmount}>Calculate</button>
      <div>
        <h2>Maturity Amount: ₹{maturityAmount}</h2>
      </div>
    </div>
  );
}

export default SIPCalculator;
