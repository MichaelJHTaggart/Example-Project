import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Register(props) {

  // const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function register(username,password) {
    if(username.trim() || password.trim() === ''){
      alert('must fill out register form! :)')
    }
    else{
      console.log(username,password)
    await axios.post('/register', { username, password })
      .then(res => {
        console.log(res.data)
      }).catch(err => console.log(err))

      //routes.push didnt work al time inside .then() works outside tho
      props.history.push('/accountdash')
      
    }
  }



  return (
    <div className='login'>
      <h1>Register</h1>

      <form onSubmit={(e)=>register(username,password)} className='login-form'>
        <label>
          Username:<input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" id="submit-button" />
      </form>
    <button onClick={()=>{props.history.push('/accountdash')}}>TEST ROUTE to ACCOUNT DASH</button>
    </div>
  )
}

export default Register