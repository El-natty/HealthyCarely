import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Doctors from './components/Doctor'
import Review from './components/Review'
import Service from './components/Service'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      < Navbar />
      < Home />
      < Doctors />
      <Service />
      <Review />
      <Footer />
    </div>
  )
}

export default App