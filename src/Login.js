import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault();

    // some fancy firebase login shitttttt.....
  }

  const register = e => {
    e.preventDefault();

    // some fancy firebase login shitttt.....
  }

  return (
    <div className='login'>
        <Link to='/'>
      <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>


            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button className='login__signInButton' type='submit' onClick={signIn}>Sign in</button>
            </form>

            <p>
                By signing-in you agree to Amazon's Conditions of Use and Sale.  
            </p>

            <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
        </div>
    </div>

    
  )
}

export default Login
