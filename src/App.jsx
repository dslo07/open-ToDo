import { useEffect, useState } from 'react'
import Login from './pages/Login'
import MainContent from './pages/MainContent'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState();
  const [taskList, setTaskList] = useState([]);
  const [userData, setUserData] = useState({
    name:'',
    icon : '',
    description : '',
    urlImg: ''
  });
  
  // buscar si hay tareas guardadas
    useEffect(() => {
      const cacheList = JSON.parse(localStorage.getItem("listTask"));
      if (Array.isArray(cacheList) && cacheList.length > 0) {
        setTaskList(cacheList);
      } 
    }, []);

    // guarda en localStorage cada vez que taskList cambia
    useEffect(() => {
      localStorage.setItem("listTask", JSON.stringify(taskList));
    }, [taskList]);

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
      {isLogin ? (<MainContent userData={user}  setIsLogin={setIsLogin} taskList={taskList} setTaskList={setTaskList}/>) : (<Login setUserData={setUserData} setIsLogin={setIsLogin}></Login>)}
    </>
  )
}

export default App
