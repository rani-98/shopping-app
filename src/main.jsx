import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import product from './components/product_home.jsx';
import Root from './routes/root.jsx';
import HomeRoute from './routes/home.jsx';
import Cart from './components/cart.jsx';


const browserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root /> ,
      children: [
        {
          path: "home",
          element: <HomeRoute />
        },
        
        //{
         // path: "products/:productId", // recipes/2 -> {recipeId: 2}, recipes/3 -> {recipeId: 3}
          //element: <DescriptionProduct />
        //},
        {
          path: "cart",
          element: <Cart />
        }
      ],
    },
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={browserRouter} />
    
  </React.StrictMode>,
)