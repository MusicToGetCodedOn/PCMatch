import { useState } from 'react'
import { Outlet } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Graphicscards from './data/video-card.json'
import Card from './components/Card'
import Header from './components/Header'

function App() {


  return (
    <>
    <main>
    <Header />
    <Card />
    
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Outlet />
      </main>
    </>
  )
}

export default App
