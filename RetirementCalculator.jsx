import React, { useState } from 'react';

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [annualExpenses, setAnnualExpenses] = useState(0);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(0);
  const [savingsRequired, setSavingsRequired] = useState(0);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState(0);

  const calculateRetirement = () => {
    const yearsLeft = yearsUntilRetirement;
    const futureValueFactor = Math.pow(1 + expectedRateOfReturn / 100, yearsLeft);
    const requiredSavings = (annualExpenses - annualIncome) * (1 - futureValueFactor) / (expectedRateOfReturn / 100);

    setSavingsRequired(requiredSavings.toFixed(2));
  };

  return (
    <div>
      <h1>Retirement Calculator</h1>
      <div>
        <label>Current Age</label>
        <input
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Income (₹)</label>
        <input
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Expenses during Retirement (₹)</label>
        <input
          type="number"
          value={annualExpenses}
          onChange={(e) => setAnnualExpenses(e.target.value)}
        />
      </div>
      <div>
        <label>Expected Rate of Return (%)</label>
        <input
          type="number"
          value={expectedRateOfReturn}
          onChange={(e) => setExpectedRateOfReturn(e.target.value)}
        />
      </div>
      <div>
        <label>Years until Retirement</label>
        <input
          type="number"
          value={yearsUntilRetirement}
          onChange={(e) => setYearsUntilRetirement(e.target.value)}
        />
      </div>
      <button onClick={calculateRetirement}>Calculate</button>
      <div>
        <h2>Savings Required: ₹{savingsRequired}</h2>
      </div>
    </div>
  );
}

export default RetirementCalculator;
