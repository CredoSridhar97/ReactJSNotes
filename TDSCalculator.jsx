import React, { useState } from 'react';

const TDSCalculator = () => {
  const [income, setIncome] = useState('');
  const [tdsRate, setTdsRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateTDS = () => {
    // Perform TDS calculation logic here
    const tdsAmount = (parseFloat(tdsRate) / 100) * parseFloat(income);

    setResult(tdsAmount.toFixed(2));
  };

  return (
    <div>
      <h2>TDS Calculator</h2>
      <label>
        Income:
        <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
      </label>
      <br />
      <label>
        TDS Rate (%):
        <input type="number" value={tdsRate} onChange={(e) => setTdsRate(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateTDS}>Calculate TDS</button>
      <br />
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>TDS Amount: ${result}</p>
        </div>
      )}
    </div>
  );
};

export default TDSCalculator;
