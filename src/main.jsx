import React from 'react'
import ReactDOM from 'react-dom/client'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles/>
  </React.StrictMode>,
)
