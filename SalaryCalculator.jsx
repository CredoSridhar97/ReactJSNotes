import React, { useState } from 'react';

function SalaryCalculator() {
  const [basicSalary, setBasicSalary] = useState(0);
  const [allowances, setAllowances] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  const calculateNetSalary = () => {
    const totalEarnings = basicSalary + allowances;
    const totalDeductions = deductions;

    const netAmount = totalEarnings - totalDeductions;
    setNetSalary(netAmount.toFixed(2));
  };

  return (
    <div>
      <h1>Salary Calculator</h1>
      <div>
        <label>Basic Salary (₹)</label>
        <input
          type="number"
          value={basicSalary}
          onChange={(e) => setBasicSalary(e.target.value)}
        />
      </div>
      <div>
        <label>Allowances (₹)</label>
        <input
          type="number"
          value={allowances}
          onChange={(e) => setAllowances(e.target.value)}
        />
      </div>
      <div>
        <label>Deductions (₹)</label>
        <input
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(e.target.value)}
        />
      </div>
      <button onClick={calculateNetSalary}>Calculate Net Salary</button>
      <div>
        <h2>Net Salary: ₹{netSalary}</h2>
      </div>
    </div>
  );
}

export default SalaryCalculator;
