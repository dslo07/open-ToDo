import React, { useEffect, useState } from 'react';

const Login = ({ setUserData, setIsLogin }) => {
  // Estados locales
  const [userName, setUserName] = useState('Welcome New User');
  const [country, setCountry] = useState('');
  const [carrier, setCarrier] = useState('');
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('👨‍💻');
  const [userImg, setUserImg] = useState('https://avatars.githubusercontent.com/u/107158851?v=4');
  const [userDesc, SetUserDesc] = useState(`I'm from  ${country} and I live in ${city}. Currently I am ${carrier} . I love creating beautiful software that delights users and reimagines the way we interact with technology.`);
  
    // validacion de datos 
    useEffect(() => {
      SetUserDesc(`I'm from ${country} and I live in ${city}. Currently I am ${carrier} and I love creating beautiful software that delights users and reimagines the way we interact with technology.`);
    }, [country, city, carrier])
    //confirmar Datos
    const submitForm = (e) =>{
      const datos = [country, city, carrier]
      e.preventDefault();
      if (datos.some((dato)=> dato.length === 0)){
        alert("todos los datos deben estar completos")
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
    //setear nuevo emoji
    const setEmoji = (e)=>{
      //atrapamos el valor del caracter
      let caracter = e.target.value.trim();
      //funcion para validar si es un emoji
      function isEmoji(caracter) {
        // Expresión regular que cubre varios rangos de emojis Unicode
        const  regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        return regex.test(caracter);
      }

      if(isEmoji(caracter) && caracter.length === 2){

        setIcon(caracter)
      }
    }
  return (
    <div className=" w-screen  flex justify-center px-8">
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
            <div className="w-16">
              <p className="text-[.8rem] mb-1">Emoji</p>
              <input
                type="text"
                placeholder="💪"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={setEmoji}
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
