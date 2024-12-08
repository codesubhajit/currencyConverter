import React from 'react'
import { useContext } from 'react'
import UserContextProvider from '../Context/UserContextProvider'
import { useState } from 'react'
import userContext from '../Context/UserContext';

function Login() {
    const [userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const {setUser} = useContext(userContext)
    const formSubmit=(e)=>{
        e.preventDefault();
        setUser({userName,password});
    }
  return (

    <div>
        <h2>Login</h2>
        <input value={userName} type='text' placeholder='username' onChange={(e)=>setUserName(e.target.value)} />
        <input value={password} type='text' placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' onClick={formSubmit}>Login</button>
    </div>
  )
}

export default Login