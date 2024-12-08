import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Protected({ Children, authentication = true }) {
    const navigate = useNavigate();
    cost[loader, setLoader] = useState(true);
    const authstatus = useSelector((state) => state.auth.status)
    useEffect(() => {
        if (authentication && authstatus !== authentication) {
            navigate('/login')
            
        }
        else if (!authentication && authstatus !== authentication) {
            navigate('/')
        }
        setLoader(false)


    }, [navigate, authstatus, authentication])

    return
    { loader ? (<h1>Loading...</h1>) : (<>{Children}</>) }

}

