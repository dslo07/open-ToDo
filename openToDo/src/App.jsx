import { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'

function App() {
  const [frases, setFrases] = useState([])
  const [user,setUser] = useState("Bienvenido Usuario")
  useEffect(()=>{
    const  fetchFrases = async ()=>{
        const res = await fetch('./frases_motivacionales.json');
        const data = await res.json();
        setFrases(data)
    }
    fetchFrases();
    
  },[])
  //const component ? <Login></Login> : <ToDoManager/>
  
  return (
    <>
      <Login setUser={setUser} user={user}/>
    </>
  )
}

export default App
