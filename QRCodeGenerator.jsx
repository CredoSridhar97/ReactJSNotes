// src/QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter text for QR code"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div>
        {text && <QRCode value={text} />}
      </div>
    </div>
  );
}

export default QRCodeGenerator;
