import React, { useState } from 'react'


const Login = ({ user, setUser }) => {
    //seteo de los estados
    const [country,setCountry] = useState("") 
    const [carrier,setCarrier] = useState("") 
    const [city,setCity] = useState("") 
    const icon = '⭐'
    const userDesc = `I'm from ${country} currently i'm ${carrier} living in ${city}. I love creating beautiful software that delights users and reimagines the way we interact with technology.`
    
    
    
    
    const urlImg = 'https://avatars.githubusercontent.com/u/147568951?v=4&size=64'
    return (
    <div className='h-screen w-screen bg-gray-900 flex justify-center p-8  '>
        <div className='bg-gray-950 rounded-1xl p-4 w-sm text-white border-1 border-gray-400 rounded'>
            <div className='flex justify-center'>
                <img className='block' src={urlImg} alt="Imagen de Usuario" width={'70px'} height={'70px'} />
            </div>
            <div className='text-center '>
                <h1 className='font-bold my-1.5'>{user.lenght === 0 ? "Welcome new user" : user } {icon}</h1>
                <p className='text-[10px] text-gray-500'>{userDesc}</p>
            </div>
            <hr  className='m-4'/>
            <form>
                <div>
                    <p className='text-[.8rem]'>What's Your Name</p>
                    <input type="text" placeholder='EJ: DragonMagico' className='border-1 border-gray-700 px-4 py-1 w-full rounded mb-2 text-[1rem] mt-1'  onChange={(e)=>{setUser(e.target.value)}} />
                </div>
                <div className='flex gap-2'>
                        <div>
                            <p className='text-[.8rem]'>Where are you from</p>
                            <input type="text" placeholder='Ej: Colombia' className='border-1 border-gray-700 px-4 py-1 w-full rounded mb-2 text-[1rem] mt-1'  onChange={(e)=>{setCountry(e.target.value)}} />
                        </div>
                        <div>
                            <p className='text-[.8rem]'>Type where you live</p>
                            <input type="text" placeholder='Ej: Medellín' className='border-1 border-gray-700 px-4 py-1 w-full rounded mb-2 text-[1rem] mt-1'  onChange={(e)=>{setCity(e.target.value)}} />
                        </div>
                </div>
                <div>
                        <p className='text-[.8rem]'>What you do?</p>
                        <input type="text" placeholder='Ej: Software Engineer' className='border-1 border-gray-700 px-4 py-1 w-full rounded mb-2 text-[1rem] mt-1'  onChange={(e)=>{setCity(e.target.value)}} />
                        <div>
                            <select name="" id=""  className='border-1 border-gray-700 px-4 py-1 w-full rounded mb-2 text-[1rem] mt-1'>
                                <option value="">Select Your Emoji</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                </div>
                <input type="submit" className='flex bg-blue-900 w-full rounded cursor-pointer py-1' value='Confirmar '/>
            </form>     
        </div>


    </div>
    )
}

export default Login