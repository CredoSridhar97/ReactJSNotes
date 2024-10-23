import React, { useState } from 'react';

function SSYCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [annualDeposit, setAnnualDeposit] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateMaturityAmount = () => {
    const totalYears = investmentDuration;
    let maturityVal = initialDeposit;

    for (let i = 1; i <= totalYears; i++) {
      maturityVal = maturityVal + annualDeposit;
      maturityVal = maturityVal * (1 + annualInterestRate / 100);
    }

    setMaturityAmount(maturityVal.toFixed(2));
  };

  return (
    <div>
      <h1>Sukanya Samriddhi Yojana Calculator</h1>
      <div>
        <label>Initial Deposit (₹)</label>
        <input
          type="number"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Deposit (₹)</label>
        <input
          type="number"
          value={annualDeposit}
          onChange={(e) => setAnnualDeposit(e.target.value)}
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
      <div>
        <label>Annual Interest Rate (%)</label>
        <input
          type="number"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
        />
      </div>
      <button onClick={calculateMaturityAmount}>Calculate</button>
      <div>
        <h2>Maturity Amount: ₹{maturityAmount}</h2>
      </div>
    </div>
  );
}

export default SSYCalculator;
