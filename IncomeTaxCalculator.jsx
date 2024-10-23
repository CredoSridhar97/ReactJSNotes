import React, { useState } from 'react';

function IncomeTaxCalculator() {
  const [annualIncome, setAnnualIncome] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  const calculateTax = () => {
    // Simplified tax slabs and rates
    const income = annualIncome;

    if (income <= 250000) {
      setTaxAmount(0);
    } else if (income <= 500000) {
      setTaxAmount(income * 0.05);
    } else if (income <= 1000000) {
      setTaxAmount(income * 0.2);
    } else {
      setTaxAmount(income * 0.3);
    }
  };

  return (
    <div>
      <h1>Income Tax Calculator</h1>
      <div>
        <label>Annual Income (₹)</label>
        <input
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </div>
      <button onClick={calculateTax}>Calculate Tax</button>
      <div>
        <h2>Tax Amount: ₹{taxAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default IncomeTaxCalculator;
