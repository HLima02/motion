import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AosInit } from './components/AosInit/aos.init'

import { ToastContainer, toast } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <ToastContainer />
        <AosInit/>
    </>
    
);

