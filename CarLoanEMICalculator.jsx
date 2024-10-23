import React, { useState } from 'react';

function CarLoanEMICalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTenure, setLoanTenure] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEMI] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const rateOfInterest = interestRate / 12 / 100;
    const timePeriod = loanTenure * 12;

    const emiValue = (principal * rateOfInterest * Math.pow(1 + rateOfInterest, timePeriod)) / (Math.pow(1 + rateOfInterest, timePeriod) - 1);

    setEMI(emiValue.toFixed(2));
  };

  return (
    <div>
      <h1>Car Loan EMI Calculator</h1>
      <div>
        <label>Loan Amount (₹)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Tenure (years)</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
        />
      </div>
      <div>
        <label>Down Payment (₹)</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
        />
      </div>
      <button onClick={calculateEMI}>Calculate</button>
      <div>
        <h2>EMI Amount: ₹{emi}</h2>
      </div>
    </div>
  );
}

export default CarLoanEMICalculator;
