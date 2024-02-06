import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesCom from './Routes/Routes.tsx'
import './index.css'
import AuthProvider from './context/authContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <AuthProvider>
        <RoutesCom>
        </RoutesCom>
        </AuthProvider>
  </React.StrictMode>,
)