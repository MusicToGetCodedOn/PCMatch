import { useState } from 'react'


import { Outlet } from 'react-router'
import './App.css'
import Graphicscards from './data/video-card.json'
import Card from './components/VideoCardCard'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Header />
    <main>  
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
