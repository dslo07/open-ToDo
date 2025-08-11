import { useState,useEffect } from "react"
import React from 'react'


const CardInfo = ({userData}) => {
    const [motiMode,setMotiMode] = useState(false);
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
    <div className='bg-gradient-to-tl from-gray-800 to-gray-700 p-4 rounded flex border-1 border-gray-500 gap-4  '>
        <img src="https://avatars.githubusercontent.com/u/107158851?v=4" alt="imagen de perfil" className='rounded-full mr-1.5' width={'100px'} />
        <div>
            {motiMode ? 
            <>
                {
                    
                }
            </>
            : 
            <>
                <h2 className="font-bold text-3xl" >{userData.name}</h2>
                <p  className="text-gray-300 text-1xl">{userData.description}</p>
            </>}
        </div>
        <div >
            <button className="border-1 p-1 rounded cursor-pointer text-sm" onClick={()=>setMotiMode(!motiMode)}>📖</button>
        </div>
    </div>
  )
}

export default CardInfo