import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import ProductsList from './components/ProductsList'
import Product from './components/Product'

function App() {
  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'contact',
          element: <ContactUs />,
        },
        {
          path: 'productlist',
          element: <ProductsList />,
        },
        {
          path: 'products',
          element: <Product />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routingObj} />
  )
}

export default App