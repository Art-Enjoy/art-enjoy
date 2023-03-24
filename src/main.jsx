import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router/router'

import { RouterProvider } from 'react-router-dom'
import { CartProvider } from "../context/CartContext";
import './index.css'
import 'react-bootstrap'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
    
  </React.StrictMode>,
)
