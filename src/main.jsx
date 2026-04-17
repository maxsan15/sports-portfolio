// Entry point of the app — mounts the root React component into the HTML <div id="root">
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Global styles applied to the entire site
import './index.css'

// React.StrictMode enables extra warnings in development to catch potential issues
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
