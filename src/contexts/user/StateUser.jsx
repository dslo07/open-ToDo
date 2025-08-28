import React, { useEffect, useState } from 'react'
import { userContext } from './UserContext'

const StateUser = ( {children}) => {
    const [userData,setUserData] = useState({});
    const [isLogin,setIslogin] = useState(false);
    //buscar el usuario guardado en cache 
    useEffect(()=>{
        const localUser = JSON.parse(localStorage.getItem("user"));
        if(localUser != null ){
            setUserData(localUser)
            setIslogin(true)
        }
    },[])
  return (
    <userContext.Provider value={{ isLogin, userData}}>
        {children}
    </userContext.Provider>
  )
}

export default StateUser