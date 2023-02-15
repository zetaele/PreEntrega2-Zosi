import React from 'react';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className="spinner-container d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
