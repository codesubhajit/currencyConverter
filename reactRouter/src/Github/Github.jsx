import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData]=useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/codesubhajit').then(Response=>Response.json).then(data=>setData(data))
    
      
    // }, [])
    const data=useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers} 
    <img src={data.avatar_url} alt='av'/></div>
  )
}
export const githubData=()=>{
    let data=  fetch('https://api.github.com/users/codesubhajit').then(Response=>Response.json);
    return data;
}

export default Github