import React from 'react'
import ReactDOM from 'react-dom/client'
import HeonApp from './HeonApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <HeonApp />
    </BrowserRouter>
  </React.StrictMode>,
)
