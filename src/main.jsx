import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' bg-linear-to-bl from-violet-500/90 to-fuchsia-500/80'>
    <App />
    </div>
  </StrictMode>,
)
