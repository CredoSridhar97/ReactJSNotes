import React, { useState } from 'react';

function EPFCalculator() {
  const [basicSalary, setBasicSalary] = useState(0);
  const [employeeContributionRate, setEmployeeContributionRate] = useState(0);
  const [employerContributionRate, setEmployerContributionRate] = useState(0);
  const [employeeContribution, setEmployeeContribution] = useState(0);
  const [employerContribution, setEmployerContribution] = useState(0);
  const [totalContribution, setTotalContribution] = useState(0);

  const calculateContributions = () => {
    const employeeContributionAmount = (basicSalary * employeeContributionRate) / 100;
    const employerContributionAmount = (basicSalary * employerContributionRate) / 100;

    setEmployeeContribution(employeeContributionAmount.toFixed(2));
    setEmployerContribution(employerContributionAmount.toFixed(2));
    setTotalContribution((employeeContributionAmount + employerContributionAmount).toFixed(2));
  };

  return (
    <div>
      <h1>EPF Calculator</h1>
      <div>
        <label>Monthly Basic Salary (₹)</label>
        <input
          type="number"
          value={basicSalary}
          onChange={(e) => setBasicSalary(e.target.value)}
        />
      </div>
      <div>
        <label>Employee Contribution Rate (%)</label>
        <input
          type="number"
          value={employeeContributionRate}
          onChange={(e) => setEmployeeContributionRate(e.target.value)}
        />
      </div>
      <div>
        <label>Employer Contribution Rate (%)</label>
        <input
          type="number"
          value={employerContributionRate}
          onChange={(e) => setEmployerContributionRate(e.target.value)}
        />
      </div>
      <button onClick={calculateContributions}>Calculate</button>
      <div>
        <h2>Employee Contribution: ₹{employeeContribution}</h2>
        <h2>Employer Contribution: ₹{employerContribution}</h2>
        <h2>Total Contribution: ₹{totalContribution}</h2>
      </div>
    </div>
  );
}

export default EPFCalculator;
