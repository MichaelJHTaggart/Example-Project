import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Login() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function register(username,email) {

      console.log(username,email)
    await axios.post('/addUser', { username, email })
      .then(res => {
        this.props.history.push('/accountdash')
      }).catch(err => {
        console.log(err)
      })

  }



  return (
    <div className='login'>
      <h1>Register</h1>

      <form onSubmit={(e)=>register(username,email)} className='login-form'>
        <label>
          Username:<input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          email:<input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Submit" id="submit-button" />
      </form>

    </div>
  )
}

export default Login