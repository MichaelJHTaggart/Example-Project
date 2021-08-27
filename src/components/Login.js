import React, { useState } from 'react'
import axios from 'axios';


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function loginUser(e) {
    axios.post('/auth/login', { username, password })
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })

  }


  return (
    <div className='login'>
      <h1>Login</h1>

      <form onSubmit={loginUser} className='login-form'>
        <label>
          Email:<input type="text" />
        </label>
        <label>
          Password:<input type="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}

export default Login
