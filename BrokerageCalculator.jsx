import React, { useState } from 'react';

const BrokerageCalculator = () => {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brokerageRate, setBrokerageRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateBrokerage = () => {
    // Perform brokerage calculation logic here
    const buyValue = parseFloat(buyPrice) * parseInt(quantity, 10);
    const sellValue = parseFloat(sellPrice) * parseInt(quantity, 10);
    const brokerage = (parseFloat(brokerageRate) / 100) * (buyValue + sellValue);

    const netProfit = sellValue - buyValue - brokerage;

    setResult(netProfit.toFixed(2));
  };

  return (
    <div>
      <h2>Brokerage Calculator</h2>
      <label>
        Buy Price:
        <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Sell Price:
        <input type="number" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <br />
      <label>
        Brokerage Rate (%):
        <input type="number" value={brokerageRate} onChange={(e) => setBrokerageRate(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateBrokerage}>Calculate Brokerage</button>
      <br />
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>Net Profit: ${result}</p>
        </div>
      )}
    </div>
  );
};

export default BrokerageCalculator;
