import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [error, setError] = useState('');
  const firstNameRef = useRef();
  const lastNameRef = useRef();



  const didClickSubmit = () => {
    if (firstNameRef.current.value != '' && lastNameRef.current.value != '') {
      console.log('Did Click');
    } else {
      setError('Please enter first name and last name');
    }
  }

  const firstNameChanged = () => {
    if (error != '') {
      setError('');
    }
  }

  const lastNameChanged = () => {
    if (error != '') {
      setError('');
    }
  }

  return (
    <>
    <div>
      <input id="firstNameField" placeholder='First Name' ref={firstNameRef} onChange={firstNameChanged}></input>
      <input id="lastNameField" placeholder='Last Name' ref={lastNameRef} onChange={lastNameChanged}></input>
    </div>
    <button onClick={didClickSubmit}>Submit</button>
    <div>
     {error.length > 0 ? <label>{error}</label> : <></>}
    </div>
    <></>
    {/* <div className="card">
      
    </div> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
