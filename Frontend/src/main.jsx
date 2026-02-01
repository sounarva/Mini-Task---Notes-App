import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NotesContextProvider } from './Context/NotesContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesContextProvider>
      <ToastContainer />
      <App />
    </NotesContextProvider>
  </StrictMode>,
)
