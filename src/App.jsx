/* eslint-disable react/no-unknown-property */
// import { useState } from 'react'

import './App.css'

import Header from './Components/Header'
import Carousel_Photo from './Components/Carousel_Photo'
import Audio from './Components/Audio'
import Massage from './Components/Massage'
import Gift from './Components/Gift'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Carousel_Photo />
        <Audio />
        <Massage />
        <Gift />
      </div>
    </>
  )
}

export default App
