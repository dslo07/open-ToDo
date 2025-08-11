import { useState } from 'react'
import Login from './components/Login'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({
    name:'',
    icon : '',
    description : '',
    urlImg: ''
  });

  return (
    <div className='flex justify-center items-center  '>
      {isLogin ? (<MainContent userData={userData}  />) : (<Login setUserData={setUserData} setIsLogin={setIsLogin}></Login>)}
    </div>
    
  )
}

export default App
