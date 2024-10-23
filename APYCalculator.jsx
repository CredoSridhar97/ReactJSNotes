import React, { useState } from 'react';

function APYCalculator() {
  const [currentAge, setCurrentAge] = useState(0);
  const [desiredPension, setDesiredPension] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);

  const calculateMonthlyContribution = () => {
    // Simplified APY calculation: Monthly Contribution = Desired Pension / (Number of Months * Interest Rate)
    const interestRate = 0.08; // 8%
    const numberOfMonths = (60 - currentAge) * 12; // Assuming retirement age is 60

    const contribution = desiredPension / (numberOfMonths * (1 + interestRate));
    setMonthlyContribution(contribution.toFixed(2));
  };

  return (
    <div>
      <h1>APY Calculator</h1>
      <div>
        <label>Current Age</label>
        <input
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
        />
      </div>
      <div>
        <label>Desired Pension (₹)</label>
        <input
          type="number"
          value={desiredPension}
          onChange={(e) => setDesiredPension(e.target.value)}
        />
      </div>
      <button onClick={calculateMonthlyContribution}>Calculate</button>
      <div>
        <h2>Monthly Contribution: ₹{monthlyContribution}</h2>
      </div>
    </div>
  );
}

export default APYCalculator;
