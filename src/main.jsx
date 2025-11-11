// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // import the Tailwind entry stylesheet
import { ThemeProvider } from "./context/ThemeContext";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
   <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
