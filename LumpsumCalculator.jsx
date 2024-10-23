import React, { useState } from 'react';

function LumpsumCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const calculateFutureValue = () => {
    const totalYears = investmentDuration;
    const futureVal = initialInvestment * Math.pow(1 + annualReturnRate / 100, totalYears);

    setFutureValue(futureVal.toFixed(2));
  };

  return (
    <div>
      <h1>Lump Sum Investment Calculator</h1>
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
        <label>Investment Duration (years)</label>
        <input
          type="number"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
        />
      </div>
      <button onClick={calculateFutureValue}>Calculate</button>
      <div>
        <h2>Future Value: ₹{futureValue}</h2>
      </div>
    </div>
  );
}

export default LumpsumCalculator;
