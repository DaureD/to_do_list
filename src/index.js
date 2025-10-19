import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Appp from './Appp';
import './css/main.css';

const app = ReactDOMClient.createRoot(document.getElementById('root'))
app.render(<Appp />)