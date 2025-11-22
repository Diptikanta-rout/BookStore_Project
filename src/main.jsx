import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import Authindex from './contects/Authindex.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authindex>
    <RouterProvider router={router} />

    </Authindex>
  </React.StrictMode>
)
