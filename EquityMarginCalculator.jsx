import React, { useState } from 'react';

const EquityMarginCalculator = () => {
  const [equityValue, setEquityValue] = useState('');
  const [marginPercentage, setMarginPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculateMargin = () => {
    // Perform margin calculation logic here
    const requiredMargin = (parseFloat(marginPercentage) / 100) * parseFloat(equityValue);

    setResult(requiredMargin.toFixed(2));
  };

  return (
    <div>
      <h2>Equity Margin Calculator</h2>
      <label>
        Equity Value:
        <input type="number" value={equityValue} onChange={(e) => setEquityValue(e.target.value)} />
      </label>
      <br />
      <label>
        Margin Percentage (%):
        <input type="number" value={marginPercentage} onChange={(e) => setMarginPercentage(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateMargin}>Calculate Margin</button>
      <br />
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>Required Margin: ${result}</p>
        </div>
      )}
    </div>
  );
};

export default EquityMarginCalculator;
