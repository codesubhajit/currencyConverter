import React, { useEffect, useState } from 'react'
const [data,setData]=useState({})
function useCurrenecyInfo(currency) {
    useEffect(()=>{
   fetch('').then((res)=>res.json()).then((res)=>setData(res[currency]))
    },[currency])
  return data;
}

export default useCurrenecyInfo