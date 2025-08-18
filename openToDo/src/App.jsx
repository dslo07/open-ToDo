import { useEffect, useState } from 'react'
import Login from './components/Login'
import MainContent from './components/MainContent'
import FabMenu from './components/FabMenu'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState();
  const [userData, setUserData] = useState({
    name:'',
    icon : '',
    description : '',
    urlImg: ''
  });
  //obtener datos guardados del usuario en el localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(()=>{
    if(user){
      setIsLogin(true)

    }else{
      setIsLogin(false)
    }
  },[])
  return (
    <>
      {isLogin ? (<MainContent userData={user}/>) : (<Login setUserData={setUserData} setIsLogin={setIsLogin}></Login>)}
      <FabMenu/>
    </>
  )
}

export default App
