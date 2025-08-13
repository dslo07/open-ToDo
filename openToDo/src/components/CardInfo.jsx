import { useState,useEffect } from "react"
import React from 'react'


const CardInfo = ({userData}) => {
    const [isMotiMode,setMotiMode] = useState(false);
    const [frases,setFrases] = useState([]);
    
    //fetch a frases
    useEffect(()=>{
        const  fetchFrases = async ()=>{
            const res = await fetch('./frases_motivacionales.json');
            const data = await res.json();
            setFrases(data)
        }
        fetchFrases();
    },[])
  return (
    <div className='bg-gradient-to-tl from-gray-800 to-gray-700 px-2 py-3 rounded flex items-center border-1 border-gray-500 gap-2  '>
        <img src={userData.urlImg} alt="imagen de perfil" className='rounded-full mr-1.5 w-[50px] h-[50px]' />
        <div>
            <div className="flex justify-between">
                <h2 className="font-bold text-1xl" >{userData.name + userData.icon}</h2>
                <button className="text-md cursor-pointer transition-transform transform hover:scale-110 hover:shadow-lg" onClick={()=>setMotiMode(!isMotiMode)}>{isMotiMode ? "🙋" : "🔥"}</button>
            </div>
            <p  className="text-gray-300 text-sm">{userData.description}</p>
        </div>
    </div>
  )
}

export default CardInfo