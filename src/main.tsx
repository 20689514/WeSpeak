import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import App from './App.tsx'
import { Web3Provider } from './context/Web3Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Web3Provider><App /></Web3Provider>
  </StrictMode>,
)
