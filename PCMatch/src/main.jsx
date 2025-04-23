import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomeRoute from '@/routes/HomeRoute.jsx'
import ProductsRoute from './routes/ProductsRoute.jsx'
import BuilderRoute from './routes/BuilderRoute.jsx'
import CompletedRoute from './routes/CompletedRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeRoute />
      },
      {
        path: '/products/',
        element: <ProductsRoute />
      },
      {
        path: '/builder/',
        element: <BuilderRoute />
      },
      {
        path: '/completedbuilds',
        element: <CompletedRoute />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>


  </StrictMode>,
)
