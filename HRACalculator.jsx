import React, { useState } from 'react';

function HRACalculator() {
  const [salary, setSalary] = useState(0);
  const [actualRentPaid, setActualRentPaid] = useState(0);
  const [hraPercentage, setHraPercentage] = useState(0);
  const [hraExemption, setHraExemption] = useState(0);
  const [netTaxableHRA, setNetTaxableHRA] = useState(0);

  const calculateHRA = () => {
    const hraExemptionAmount = Math.min(
      actualRentPaid - (0.1 * salary),
      (hraPercentage / 100) * salary,
      actualRentPaid - 0.1 * salary
    );

    setHraExemption(hraExemptionAmount.toFixed(2));
    setNetTaxableHRA((0.5 * salary - hraExemptionAmount).toFixed(2));
  };

  return (
    <div>
      <h1>HRA Calculator</h1>
      <div>
        <label>Salary (₹)</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <div>
        <label>Actual Rent Paid (₹)</label>
        <input
          type="number"
          value={actualRentPaid}
          onChange={(e) => setActualRentPaid(e.target.value)}
        />
      </div>
      <div>
        <label>HRA Percentage (%)</label>
        <input
          type="number"
          value={hraPercentage}
          onChange={(e) => setHraPercentage(e.target.value)}
        />
      </div>
      <button onClick={calculateHRA}>Calculate</button>
      <div>
        <h2>HRA Exemption: ₹{hraExemption}</h2>
        <h2>Net Taxable HRA: ₹{netTaxableHRA}</h2>
      </div>
    </div>
  );
}

export default HRACalculator;
