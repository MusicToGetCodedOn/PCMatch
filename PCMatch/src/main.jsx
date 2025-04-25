import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomeRoute from '@/routes/HomeRoute.jsx'
import ProductsRoute from './routes/ProductsRoute.jsx'
import BuilderRoute from './routes/BuilderRoute.jsx'
import CompletedRoute from './routes/CompletedRoute.jsx'
import CaseFanRoute from './routes/CaseFanRoute.jsx'
import CaseRoute from './routes/CaseRoute.jsx'
import CpuCoolerRoute from './routes/CpuCoolerRoute.jsx'
import CpuRoute from './routes/CpuRoute.jsx'
import ExtDriveRoute from './routes/ExtDriveRoute.jsx'
import IntDriveRoute from './routes/IntDriveRoute.jsx'
import MemoryRoute from './routes/MemoryRoute.jsx'
import MotherboardRoute from './routes/MotherboardRoute.jsx'
import OsRoute from './routes/OsRoute.jsx'
import PowerSupplyRoute from './routes/PowerSupplyRoute.jsx'
import VideoCardRoute from './routes/VideoCardRoute.jsx'
import WiredRoute from './routes/WiredRoute.jsx'
import WirelessRoute from './routes/WirelessRoute.jsx'


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
        path: '/products/casefans',
        element: <CaseFanRoute />
      },
      {
        path: '/products/cases',
        element: <CaseRoute />
      },
      {
        path: '/products/cpucoolers',
        element: <CpuCoolerRoute/>
      },
      {
        path: '/products/cpus',
        element: <CpuRoute/>
      },
      {
        path: '/products/extdrives',
        element: <ExtDriveRoute/>
      },
      {
        path: '/products/intdrives',
        element: <IntDriveRoute/>
      },
      {
        path: '/products/memory',
        element: <MemoryRoute />
      },
      {
        path: '/products/motherboards',
        element: <MotherboardRoute />
      },
      {
        path: '/products/os',
        element: <OsRoute/>
      },
      {
        path: '/products/powersupplies',
        element: <PowerSupplyRoute />
      },
      {
        path: '/products/videocards',
        element: <VideoCardRoute/>
      },
      {
        path: '/products/wirednetworkcards',
        element: <WiredRoute/>
      },
      {
        path: '/products/wirelessnetworkcards',
        element: <WirelessRoute/>
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
