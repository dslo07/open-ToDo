import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'

const Login = ({ setUserData, setIsLogin }) => {
  // Estados locales
  const [userName, setUserName] = useState('Welcome New User');
  const [country, setCountry] = useState('');
  const [carrier, setCarrier] = useState('');
  const [city, setCity] = useState('');
  const icon = "👨‍💻"
  const [userImg, setUserImg] = useState('https://avatars.githubusercontent.com/u/107158851?v=4');
  const [userDesc, SetUserDesc] = useState(`I'm from  ${country} and I live in ${city}. Currently I am ${carrier} . I love creating beautiful software that delights users and reimagines the way we interact with technology.`);
    // buscaremos si hay algun dato guardado en el cache del navegador, si lo hay

    // validacion de datos 
    useEffect(() => {
      SetUserDesc(`I'm from ${country} and I live in ${city}. Currently I am ${carrier} and I love creating beautiful software that delights users and reimagines the way we interact with technology.`);
    }, [country, city, carrier])

    //confirmar Datos
    const submitForm = (e) =>{
      const datos = [country, city, carrier,userName,carrier]
      e.preventDefault();
      if (datos.some((dato)=> dato.length === 0)){
        toast.error("You must fill in the required fields.")
      }else{
        const user = {
              name: userName,
              icon: icon,
              description : userDesc,
              urlImg: userImg
        };
        setUserData(user);
        localStorage.setItem("user",JSON.stringify(user))
        setIsLogin(true);
      }
    }

    //Fetch para buscar perfil de git 
    const fetchGit = (e)=>{
      let gitUser = e.target.value.trim()
      if(gitUser === ''){
        setUserImg(`https://avatars.githubusercontent.com/u/107158851?v=4`)
      }else{
        setUserImg(`https://github.com/${gitUser}.png`)
      }
    }
    
  return (
    
    <div className=" w-screen  flex justify-center px-8">
      <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{ duration: 1500}}  
      />
      <div className="bg-gray-950 p-4 w-full max-w-sm min-h-[100px] h-auto text-white border border-gray-400 rounded flex-nowrap">
        {/*Datos del usuario*/}
        <div className='flex gap-2'>
          <div className="flex justify-center items-center">
            <img src={userImg} alt="Imagen de Usuario" width={100}  className="rounded-full" />
          </div>
          <div className='max-w-[250px]' >
            <h1 className="font-bold my-1.5">
              {userName} {icon}
            </h1>
            <p className="text-[10px] text-gray-500">{userDesc}</p>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        {/*Datos del Formulario*/}
        <form onSubmit={submitForm}>
          <div className="flex justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="text-[.8rem] mb-1">What's Your UserName</p>
              <input
                type="text"
                placeholder="EJ: DragonMagico"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={(e)=> setUserName(e.target.value.trim())}
              />
            </div>

          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <p className="text-[.8rem] mb-1">Where are you from</p>
              <input
                type="text"
                placeholder="Ej: Colombia"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={(e)=> setCountry(e.target.value.trim())}
              />
            </div>
            <div className="flex-1">
              <p className="text-[.8rem] mb-1">Type where you live</p>
              <input
                type="text"
                placeholder="Ej: Medellín"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={(e)=> setCity(e.target.value.trim())}
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-[.8rem] mb-1">What you do?</p>
            <input
              type="text"
              placeholder="Ej: Software Engineer"
              className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
              onChange={(e)=> setCarrier(e.target.value.trim())}
              
            />
            <p className="text-[.8rem] mt-2 mb-1">Enter your github profile to set the img  (optional)</p>
            <input
              type="text"
              placeholder="Ej: caballoDeLaMontania777"
              className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
              onChange={fetchGit}
            />
          </div>

          <div className="mb-4">
            <p className="text-[.8rem] mb-1">Set your own description (optional)</p>
            <textarea
              placeholder="Ej: Software Engineer"
              className="max-h-[100px] border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
            />
          </div>

          <input
            type="submit"
            className="bg-blue-900 w-full rounded cursor-pointer py-2 text-white font-semibold"
            value="Confirmar"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
