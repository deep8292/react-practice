import { useState, useRef } from 'react'
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
    </>
  )
}

export default App
