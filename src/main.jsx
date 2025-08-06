import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/App.jsx'
import './containers/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
