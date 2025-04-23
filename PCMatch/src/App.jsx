import { useState } from 'react'


import { Outlet } from 'react-router'
import './App.css'
import Graphicscards from './data/video-card.json'
import Card from './components/Card'
import Header from './components/Header'


function App() {


  return (
    <>
    <main>
      <div>
        <Header />
      </div>
 
      <Card />
    </main>

    
    

      
      <Outlet />
     

    </>
  )
}

export default App
