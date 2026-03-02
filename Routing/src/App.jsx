import {createBrowserRouter, RouterProvider, Navigate} from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Tech from './components/Tech'
import Java from './components/Java'
import Vue from './components/Vue'
import Angular from './components/Angular'

function App() {
  const routingObj = createBrowserRouter([{
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"tech",
          element:<Tech/>,
          children:[
            {
              path:"java",
              element:<Java/>
            },
            {
              path:"angular",
              element:<Angular/>
            },
            {
              path:"vue",
              element:<Vue/>
            },
            {
              path:"",
              element: <Navigate to="java"/>
            }
          ]
        }
      ]
  }])
  return (
    <RouterProvider router={routingObj} />
  )
}

export default App