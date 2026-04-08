import React from 'react'
import ReactDOM from 'react-dom/client'
import MenasudPage from './MenasudPage.jsx'
import logoSrc from './assets/menasud.jpeg'
import './style.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <MenasudPage logo={logoSrc} />
  </React.StrictMode>,
)
