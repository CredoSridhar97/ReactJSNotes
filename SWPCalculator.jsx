import React, { useState } from 'react';

function SWPCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [withdrawalFrequency, setWithdrawalFrequency] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);

  const calculateDuration = () => {
    const monthlyReturnRate = (annualReturnRate / 12) / 100;
    const totalMonths = investmentDuration * 12;
    let remainingAmount = initialInvestment;
    let months = 0;

    while (remainingAmount >= withdrawalAmount) {
      remainingAmount = remainingAmount * (1 + monthlyReturnRate) - withdrawalAmount;
      months += withdrawalFrequency;
    }

    setInvestmentDuration(Math.floor(months / 12));
  };

  return (
    <div>
      <h1>SWP Calculator</h1>
      <div>
        <label>Initial Investment Amount (₹)</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
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
        <label>Withdrawal Amount (₹)</label>
        <input
          type="number"
          value={withdrawalAmount}
          onChange={(e) => setWithdrawalAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Withdrawal Frequency (months)</label>
        <input
          type="number"
          value={withdrawalFrequency}
          onChange={(e) => setWithdrawalFrequency(e.target.value)}
        />
      </div>
      <button onClick={calculateDuration}>Calculate</button>
      <div>
        <h2>Investment Duration: {investmentDuration} years</h2>
      </div>
    </div>
  );
}

export default SWPCalculator;
