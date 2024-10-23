import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="birthYear">Enter your birth year: </label>
      <input
        type="number"
        id="birthYear"
        value={birthYear}
        onChange={(e) => setBirthYear(Number(e.target.value))}
      />
      <button onClick={calculateAge}>Calculate</button>
      {age > 0 && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;
