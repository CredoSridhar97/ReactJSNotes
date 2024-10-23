// src/BarcodeGenerator.js
import React, { useState, useRef } from 'react';
import JsBarcode from 'jsbarcode';

function BarcodeGenerator() {
  const [text, setText] = useState('');
  const barcodeRef = useRef(null);

  const generateBarcode = () => {
    JsBarcode(barcodeRef.current, text, {
      format: 'CODE128',
      displayValue: true,
    });
  };

  return (
    <div>
      <h1>Barcode Generator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter text for barcode"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={generateBarcode}>Generate Barcode</button>
      </div>
      <div>
        <svg ref={barcodeRef}></svg>
      </div>
    </div>
  );
}

export default BarcodeGenerator;
