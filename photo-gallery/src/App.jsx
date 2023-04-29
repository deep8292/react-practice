import { useEffect, useState } from 'react'
import images from './images';
import './App.css'

function App() {
  const [index, setIndex] = useState(0);
  
  const changeImage = (isNext) => {
    if (isNext && (images.length - 1) > index) {
      setIndex(index + 1)
    } else if (!isNext && index > 0) {
      setIndex(index - 1)
    }
  }
  return (
    <>
      <div>
      <h1 className="headingTitle">Photo Gallery</h1>
      <div style={{flexDirection: 'row', justifyContent: 'center'}}>
        <button onClick={() => changeImage(false)}>Previous</button>
        <img src={images[index]} className="logo" alt="Vite logo" />
        <button onClick={() => changeImage(true)}>Next</button>
      </div>
      </div>
    </>
  )
}

export default App
