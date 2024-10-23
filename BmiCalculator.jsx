import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(2));
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label htmlFor="height">Height (cm):</label>
      <input
        type="number"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate</button>

      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  );
};

export default BmiCalculator;
