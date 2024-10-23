import React, { useState } from 'react';

function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [years, setYears] = useState(0);
  const [cagr, setCAGR] = useState(0);

  const calculateCAGR = () => {
    const cagrValue = ((finalValue / initialValue) ** (1 / years)) - 1;
    const cagrPercentage = cagrValue * 100;
    setCAGR(cagrPercentage.toFixed(2));
  };

  return (
    <div>
      <h1>CAGR Calculator</h1>
      <div>
        <label>Initial Value</label>
        <input
          type="number"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
        />
      </div>
      <div>
        <label>Final Value</label>
        <input
          type="number"
          value={finalValue}
          onChange={(e) => setFinalValue(e.target.value)}
        />
      </div>
      <div>
        <label>Number of Years</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button onClick={calculateCAGR}>Calculate</button>
      <div>
        <h2>CAGR: {cagr}%</h2>
      </div>
    </div>
  );
}

export default CAGRCalculator;
