import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { UserContext, UserProvider } from './context/UserContext.jsx'
createRoot(document.getElementById('root')).render(
  <Router>
    <UserProvider> <App /></UserProvider>
  </Router>
)
