import { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'

function App() {
  const [frases, setFrases] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [user,setUser] = useState("Bienvenido Usuario")
  const [desc,setDesc] = useState("")
  useEffect(()=>{
    const  fetchFrases = async ()=>{
        const res = await fetch('./frases_motivacionales.json');
        const data = await res.json();
        setFrases(data)
    }
    fetchFrases();
    
  },[])
  return (
    <div>
      {isLogin ? (<h1> Hello </h1> ) : (<Login user={user} desc={desc} setUser={setUser} setDesc={setDesc} setIsLogin={setIsLogin}></Login>)}
    </div>
    
  )
}

export default App
