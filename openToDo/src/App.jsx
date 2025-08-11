import { useState } from 'react'
import Login from './components/Login'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({
    name:'Bienvenido Usuario',
    description : `I'm from  and I live in . Currently I'm . I love creating beautiful software that delights users and reimagines the way we interact with technology.`,
    urlImg: ''
  });

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      {isLogin ? (<MainContent userData={userData}  />) : (<Login userData={userData}  setUserData={setUserData} setIsLogin={setIsLogin}></Login>)}
    </div>
    
  )
}

export default App
