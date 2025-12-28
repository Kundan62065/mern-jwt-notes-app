import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import toast from 'react-hot-toast'
import { Toaster } from 'sonner'
import { UserProvider } from './context/userContext'
import { store } from './components/Todoredux/storexyz'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <Provider store={store}>
      <div className="w-screen min-h-screen overflow-hidden">
      <App />
      <Toaster position="top-right"/> 
      
      </div>
      
      
    </Provider>
      <Toaster />
    </UserProvider>
  </StrictMode>,
)
