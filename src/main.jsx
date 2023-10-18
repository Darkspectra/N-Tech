import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './Components/AddProduct.jsx'
import Home from './Components/Home.jsx'
import CardOverview from './Components/CardOverview.jsx'
import DetailsProducts from './Components/DetailsProducts.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/brands.json')
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/products/:name",
        element: <CardOverview></CardOverview>,
        loader: ()=> fetch("http://localhost:5000/product")
      },
      {
        path: "/products/:name/details/:id",
        element: <DetailsProducts></DetailsProducts>,
        loader: ()=> fetch("http://localhost:5000/product")
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)