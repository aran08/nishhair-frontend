import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CheckoutNav = ({children}) => {
    const location = useLocation();

    const [showNavbar,setShowNavbar] =useState(false)

    useEffect(()=>{
        if(location.pathname === '/checkout'){
            setShowNavbar(false)
        }else if(location.pathname === '/login'){
          setShowNavbar(false)
        }else if(location.pathname === '/register'){
          setShowNavbar(false)
        }else{
            setShowNavbar(true)
        }
    },[location])
    
  return (
    <div>{showNavbar && children}</div>
  )
}

export default CheckoutNav