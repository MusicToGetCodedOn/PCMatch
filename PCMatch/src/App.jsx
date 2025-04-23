import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Graphicscards from './data/video-card.json'
import Card from './components/Card'

function App() {


  return (
    <>
      
    <Card />
    
    
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
