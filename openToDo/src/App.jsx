import { useEffect, useState } from 'react'
import Login from './components/Login'
import MainContent from './components/MainContent'
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
      
        <div className='bg-gray-500 h-full sm:hidden flex justify-between'>
          <button>
            Pomodoro
          </button>
          <button>
            add
          </button>
          <button>
            Task
          </button>
        </div>
    </>
  )
}

export default App
