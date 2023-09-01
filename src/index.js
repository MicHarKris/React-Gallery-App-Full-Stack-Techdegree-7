import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import './index.css';
import App from './App'; // Import your main App component
import { createRoot } from 'react-dom/client';


// Create a root for rendering React content into the 'root' element in the HTML
const root = createRoot(document.getElementById('root'));

// Render your React application wrapped in React.StrictMode for additional checks
root.render(
  <React.StrictMode>
    {/* Wrap your entire application with BrowserRouter for routing */}
    <BrowserRouter>
      <App /> {/* Render your main App component */}
    </BrowserRouter>
  </React.StrictMode>
);
