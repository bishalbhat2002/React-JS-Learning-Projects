import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './components/CounterContext/CounterContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <CounterProvider>
    <App />
    </CounterProvider>
  </StrictMode>
  </BrowserRouter>,
)
