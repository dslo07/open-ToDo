import React, { useEffect, useState } from 'react';

const Login = ({ userData, setUserData, setIsLogin }) => {
  // Estados locales
  const [userName, setuserName] = useState('');
  const [country, setCountry] = useState('');
  const [carrier, setCarrier] = useState('');
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('👨‍💻');
  const [userImg, setUserImg] = useState('https://avatars.githubusercontent.com/u/107158851?v=4');
  

  return (
    <div className=" w-screen  flex justify-center p-8">
      <div className="bg-gray-950 p-4 w-full max-w-sm min-h-[100px] h-auto text-white border border-gray-400 rounded flex-nowrap">
        <div className="flex justify-center mb-4">
          <img src={userImg} alt="Imagen de Usuario" width={70} height={70} className="rounded-full" />
        </div>
        <div className="text-center mb-4">
          <h1 className="font-bold my-1.5">
            {userData.name}
          </h1>
          <p className="text-[10px] text-gray-500">{userData.description}</p>
        </div>
        <hr className="my-4 border-gray-700" />
        <form onSubmit={(e)=>{e.preventDefault(); setIsLogin(true)}}>
          <div className="flex justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="text-[.8rem] mb-1">What's Your Name</p>
              <input
                type="text"
                placeholder="EJ: DragonMagico"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={(e)=> setuserName({  
                  
                })}
              />
            </div>
            <div className="w-16">
              <p className="text-[.8rem] mb-1">Emoji</p>
              <input
                type="text"
                placeholder="💪"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
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
              />
            </div>
            <div className="flex-1">
              <p className="text-[.8rem] mb-1">Type where you live</p>
              <input
                type="text"
                placeholder="Ej: Medellín"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-[.8rem] mb-1">What you do?</p>
            <input
              type="text"
              placeholder="Ej: Software Engineer"
              className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
            />
            <p className="text-[.8rem] mt-2 mb-1">Enter your github profile to set the img</p>
            <input
              type="text"
              placeholder="Ej: caballoDeLaMontania777"
              className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
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
