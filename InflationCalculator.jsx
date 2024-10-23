import React, { useState } from 'react';

const InflationCalculator = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateFutureValue = () => {
    // Perform inflation calculation logic here
    const adjustedAmount = (parseFloat(initialAmount) * Math.pow(1 + parseFloat(inflationRate) / 100, parseInt(years, 10)));

    setResult(adjustedAmount.toFixed(2));
  };

  return (
    <div>
      <h2>Inflation Calculator</h2>
      <label>
        Initial Amount:
        <input type="number" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)} />
      </label>
      <br />
      <label>
        Inflation Rate (%):
        <input type="number" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} />
      </label>
      <br />
      <label>
        Number of Years:
        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateFutureValue}>Calculate Future Value</button>
      <br />
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>Adjusted Amount: ${result}</p>
        </div>
      )}
    </div>
  );
};

export default InflationCalculator;
