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

  const removeEntry = (idx) => {
    setNames(oldNames => {
      return oldNames.filter((_, index) => index !== idx)
    })
  }

  return (
    <>
    <div className='row'>
      <input id="firstNameField" placeholder='First Name' ref={firstNameRef} onChange={firstNameChanged}></input>
      <input id="lastNameField" placeholder='Last Name' ref={lastNameRef} onChange={lastNameChanged}></input>
    </div>
    <button onClick={didClickSubmit}>Submit</button>
    <div>
     {error.length > 0 ? <label>{error}</label> : <></>}
    </div>
    <div>
      {names.map((name, idx) => {
        return (
          <li key={idx}>
            <span>{name}  </span>
            <button onClick={() => removeEntry(idx)}>Delete</button>
          </li>
        )
      })}
    </div>
    </>
  )
}

export default App
