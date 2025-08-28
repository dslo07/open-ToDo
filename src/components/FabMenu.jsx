import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLibrary } from "react-icons/io5";
import { GiTomato } from "react-icons/gi";
const FabMenu = ({setOpen,showTask, setIsLogin,setShowTask}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 flex flex-row items-center gap-3 z-50">
      {/* Botones secundarios */}
      {isOpen && (
        <>
          <button onClick={()=>{setIsLogin(false)}} className="p-3 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer" size={30}>
            <CgProfile className="text-blue-600" />
          </button>
          <button onClick={()=>setOpen(true)}  aria-label="Open profile"  className="p-3 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
            <IoIosAddCircleOutline className="text-green-700" />
          </button>
          <button onClick={()=>setShowTask(!showTask)} className="p-3 rounded-full lg:hidden bg-white flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
            <IoLibrary className="text-green-600" />
          </button>
        </>
      )}

      {/* Botón principal */}
      <button
        onClick={toggleMenu}
        className="p-4 rounded-full bg-gray-950 text-white shadow-lg border hover:bg-gray-700 transition-all"
      >
        
        <IoMenu  className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} size={24} />
      </button>
    </div>
  );
};

export default FabMenu;
