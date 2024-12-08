import React from 'react'
import UserContextProvider from '../Context/UserContextProvider'
import { useContext } from 'react'
import userContext from '../Context/UserContext'


function Profile() {
    const {user}=useContext(userContext)
 console.log(user);
 
    if(!user)
        return <h1>Please Login</h1>
    
  return <h1>welcome  {user?.userName ||' subhi'}</h1>


  
}

export default Profile