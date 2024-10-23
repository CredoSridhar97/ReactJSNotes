import React, { useState } from 'react';

function GSTCalculator() {
  const [amount, setAmount] = useState(0);
  const [gstRate, setGSTRate] = useState(0);
  const [gstAmount, setGSTAmount] = useState(0);

  const calculateGST = () => {
    const calculatedGST = (amount * gstRate) / 100;
    setGSTAmount(calculatedGST.toFixed(2));
  };

  return (
    <div>
      <h1>GST Calculator</h1>
      <div>
        <label>Amount (₹)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>GST Rate (%)</label>
        <input
          type="number"
          value={gstRate}
          onChange={(e) => setGSTRate(e.target.value)}
        />
      </div>
      <button onClick={calculateGST}>Calculate GST</button>
      <div>
        <h2>GST Amount: ₹{gstAmount}</h2>
      </div>
    </div>
  );
}

export default GSTCalculator;
