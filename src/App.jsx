import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'

const App = () => {
  return (
    <>
      <Navbar />
    <div>
      <Home />
    </div>
    <Footer />
    </>
  )
}

export default App
