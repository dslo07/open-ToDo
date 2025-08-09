import React, { useEffect, useState } from 'react';

const Login = ({ user, desc, setUser, setDesc, setIsLogin }) => {
  // Estados locales
  const [country, setCountry] = useState('');
  const [carrier, setCarrier] = useState('');
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('👨‍💻');
  const [userImg, setUserImg] = useState('https://avatars.githubusercontent.com/u/107158851?v=4');

  // Actualizar descripción cuando cambian country, city o carrier
  useEffect(() => {
    const userDesc = `I'm from ${country} and I live in ${city}. Currently I'm ${carrier}. I love creating beautiful software that delights users and reimagines the way we interact with technology.`;
    setDesc(userDesc);
  }, [country, city, carrier, setDesc]);

  // Cambiar icono si la longitud es 1 (emoji)
  const putIcon = (e) => {
    if (e.target.value.length === 1) {
      setIcon(e.target.value);
    }
  };

  // Obtener imagen de usuario de GitHub
  const fetchGitUser = async (e) => {
    const userName = e.target.value.trim();
    if (!userName) return;
    try {
      const url = `https://api.github.com/users/${userName}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Usuario no encontrado');
      const data = await res.json();
      if (data.avatar_url) {
        setUserImg(data.avatar_url);
      }
    } catch {
      // En caso de error, poner una imagen por defecto o dejar la que había
      setUserImg('https://avatars.githubusercontent.com/u/0?v=4');
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900 flex justify-center p-8">
      <div className="bg-gray-950 p-4 w-full max-w-sm text-white border border-gray-400 rounded">
        <div className="flex justify-center mb-4">
          <img src={userImg} alt="Imagen de Usuario" width={70} height={70} className="rounded-full" />
        </div>
        <div className="text-center mb-4">
          <h1 className="font-bold my-1.5">
            {user.length === 0 ? 'Welcome new user' : user} {icon}
          </h1>
          <p className="text-[10px] text-gray-500">{desc}</p>
        </div>
        <hr className="my-4 border-gray-700" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsLogin(true);
          }}
        >
          <div className="flex justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="text-[.8rem] mb-1">What's Your Name</p>
              <input
                type="text"
                placeholder="EJ: DragonMagico"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="w-16">
              <p className="text-[.8rem] mb-1">Emoji</p>
              <input
                type="text"
                placeholder="💪"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={putIcon}
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
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <p className="text-[.8rem] mb-1">Type where you live</p>
              <input
                type="text"
                placeholder="Ej: Medellín"
                className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-[.8rem] mb-1">What you do?</p>
            <input
              type="text"
              placeholder="Ej: Software Engineer"
              className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
              onChange={(e) => setCarrier(e.target.value)}
            />
            <p className="text-[.8rem] mt-2 mb-1">Enter your github profile to set the img</p>
            <input
              type="text"
              placeholder="Ej: caballoDeLaMontania777"
              className="border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
              onChange={fetchGitUser}
            />
          </div>

          <div className="mb-4">
            <p className="text-[.8rem] mb-1">Set your own description (optional)</p>
            <textarea
              placeholder="Ej: Software Engineer"
              className="max-h-[100px] border border-gray-700 px-4 py-1 w-full rounded text-[1rem]"
              onChange={(e) => setDesc(e.target.value)}
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
