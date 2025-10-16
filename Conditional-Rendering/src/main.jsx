import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Event_Handling from './Event_Handling.jsx'
import Event_Handling02 from './Event_Handling02.jsx'
import Event_Handling03 from './Event_Handling03.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Event_Handling03 />
  </StrictMode>,
)
