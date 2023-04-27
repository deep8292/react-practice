import { useState } from 'react'
import marvel from './assets/1.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1 className="headingTitle">Photo Gallery</h1>
      <img src={marvel} className="logo" alt="Vite logo" />
    </>
  )
}

export default App
