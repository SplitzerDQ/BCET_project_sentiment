import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Import your CSS file for styling
import App from './App'; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Target the root element in index.html

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
