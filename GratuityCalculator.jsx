import React, { useState } from 'react';

function GratuityCalculator() {
  const [yearsOfService, setYearsOfService] = useState(0);
  const [lastDrawnSalary, setLastDrawnSalary] = useState(0);
  const [gratuityAmount, setGratuityAmount] = useState(0);

  const calculateGratuity = () => {
    // Simplified gratuity formula: Gratuity = (Last Drawn Salary * Years of Service * 15) / 26
    const gratuity = (lastDrawnSalary * yearsOfService * 15) / 26;
    setGratuityAmount(gratuity.toFixed(2));
  };

  return (
    <div>
      <h1>Gratuity Calculator</h1>
      <div>
        <label>Years of Service</label>
        <input
          type="number"
          value={yearsOfService}
          onChange={(e) => setYearsOfService(e.target.value)}
        />
      </div>
      <div>
        <label>Last Drawn Salary (₹)</label>
        <input
          type="number"
          value={lastDrawnSalary}
          onChange={(e) => setLastDrawnSalary(e.target.value)}
        />
      </div>
      <button onClick={calculateGratuity}>Calculate Gratuity</button>
      <div>
        <h2>Gratuity Amount: ₹{gratuityAmount}</h2>
      </div>
    </div>
  );
}

export default GratuityCalculator;
