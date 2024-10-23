import React, { useState } from 'react';

function StepUpSIPCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [sipIncrement, setSipIncrement] = useState(0);
  const [sipTenure, setSipTenure] = useState(0);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateMaturityAmount = () => {
    let totalInvestment = initialInvestment;
    let monthlyInvestment = initialInvestment;
    let rateOfReturn = expectedRateOfReturn / 100;
    const numberOfMonths = sipTenure * 12;

    for (let i = 1; i <= numberOfMonths; i++) {
      totalInvestment += monthlyInvestment;
      monthlyInvestment += sipIncrement;
      totalInvestment *= 1 + rateOfReturn / 12;
    }

    setMaturityAmount(totalInvestment.toFixed(2));
  };

  return (
    <div>
      <h1>Step Up SIP Calculator</h1>
      <div>
        <label>Initial Investment (₹)</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </div>
      <div>
        <label>SIP Increment (₹)</label>
        <input
          type="number"
          value={sipIncrement}
          onChange={(e) => setSipIncrement(e.target.value)}
        />
      </div>
      <div>
        <label>SIP Tenure (years)</label>
        <input
          type="number"
          value={sipTenure}
          onChange={(e) => setSipTenure(e.target.value)}
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
      <button onClick={calculateMaturityAmount}>Calculate</button>
      <div>
        <h2>Maturity Amount: ₹{maturityAmount}</h2>
      </div>
    </div>
  );
}

export default StepUpSIPCalculator;
