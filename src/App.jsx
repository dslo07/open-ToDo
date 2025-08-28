import { useEffect, useState,useContext } from 'react'
import MainContent from './pages/MainContent'
import {userContext} from './contexts/user/UserContext'
import Login from './pages/Login'
import './App.css'


function App() {
  const { isLogin } = useContext(userContext) // guardar contexto de usuario 
  return (
  <>
    {isLogin ? (<MainContent/>) : (<Login/>)}
  </>
  )
}

export default App
