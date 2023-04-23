import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [error, setError] = useState('');
  const [names, setNames] = useState([]);
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const didClickSubmit = () => {
    if (firstNameRef.current.value != '' && lastNameRef.current.value != '') {
      setNames([...names, `${firstNameRef.current.value} ${lastNameRef.current.value}`])
    } else {
      setError('Please enter first name and last name');
    }
  }

  const didClickCancel = () => {
    if (names.length > 0) {
      setNames([]);
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
    <button onClick={didClickCancel}>Clear</button>
    <div>
     {error.length > 0 ? <label>{error}</label> : <></>}
    </div>
    <div>
      {names.map((name, idx) => {
        return (<li key={idx}>{name}</li>)
      })}
    </div>
    </>
  )
}

export default App
