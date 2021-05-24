import React from 'react';
import ReactDOM from 'react-dom';
import BarcodeScannerWASM from './src/barcode-scanner-wasm/barcode-scanner-wasm';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BarcodeScannerWASM />
  </React.StrictMode>,
  document.getElementById('root')
);
