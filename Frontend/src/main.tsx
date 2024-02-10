import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.tsx'
import Subscriptions from './Pages/Subscriptions/Subscriptions.tsx'
import Video from './Pages/Video/Video.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/subscriptions',
        element: <Subscriptions />
      },
      {
        path: '/video/:id',
        element: <Video />
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
