import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// MUI uses ROBOTO. Import Roboto in entry point
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
<div>
    <App />
   </div>
);

