import React, { useState } from 'react';

function SimpleInterestCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);

  const calculateSimpleInterest = () => {
    const interest = (principalAmount * interestRate * timePeriod) / 100;
    setSimpleInterest(interest.toFixed(2));
  };

  return (
    <div>
      <h1>Simple Interest Calculator</h1>
      <div>
        <label>Principal Amount (₹)</label>
        <input
          type="number"
          value={principalAmount}
          onChange={(e) => setPrincipalAmount(e.target.value)}
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
        <label>Time Period (years)</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        />
      </div>
      <button onClick={calculateSimpleInterest}>Calculate</button>
      <div>
        <h2>Simple Interest: ₹{simpleInterest}</h2>
      </div>
    </div>
  );
}

export default SimpleInterestCalculator;
