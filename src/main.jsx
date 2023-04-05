import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Inventory from './component/Inventory/Inventory';
import Order from './component/Order/Order';
import Login from './component/Login/Login';
import cartProductsLoader from './Loaders/cartProductsLoader';
import CheckOut from './component/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:"order",
        element:<Order></Order>,
        loader:cartProductsLoader
      },
      {
        path:'checkout',
        element:<CheckOut></CheckOut>
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ]
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
