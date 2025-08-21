import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const   CardTask = ({ task,setAssociated, message = "Do now" }) => {
  const [text,setText] = useState(message)
    const notify = () => {
      toast.success('Task associated.');
      setAssociated(task);
      setText("Associated")
    }
  
  const setPriority= (priority)=>{
    const baseClasses = 'text-sm border-1 py-1 px-2 rounded';

    switch (priority) {
      case 'High':
        return `${baseClasses} border-red-800 bg-red-300 text-red-900`;
      case 'Mid':
        return `${baseClasses} border-yellow-800 bg-yellow-300 text-yellow-900`;
      case 'Low':
        return `${baseClasses} border-blue-800 bg-blue-300 text-green-900`;
      case 'Ready':
        return `${baseClasses} border-green-800 bg-green-300 text-green-900`;
    }
  }

    //setPriority(task.priority)
    return (
    <div  className=' bg-gray-900 p-3 flex flex-col justify-between rounded-lg border-[1px] h-[150px] w-[320px] sm:w-full border-gray-500 transition-transform transform hover:scale-102 hover:shadow-lg ' >
            <Toaster 
              position="top-center" 
              reverseOrder={false} 
              toastOptions={{ duration: 2000}}  
            />
      <div>
          <div className='flex justify-between '>
              <span className={setPriority(task.priority)}>{task.priority}</span>
              <span className='text-sm border-[1px] py-1 px-2 rounded border-gray-400 bg-gray-600'>{task.expiration === "" ? "No-Expiration" : task.expiration  }</span>
          </div>
          <div >
              <h2 className='text-center font-semibold my-1 text-1xl '>{task.name}</h2>
              <p className='pb-2 leading-[17px] text-sm text-gray-400'>{task.description}</p>
          </div>
      </div>
      <div className='flex mt-full gap-2 '>
          <button className="border w-90 justify-center font-semibold py-1 px-2 rounded cursor-pointer text-sm flex items-center hover:bg-gray-100 hover:text-gray-900" onClick={ notify }>{text}</button>
          <button className="border w-20 justify-center font-semibold py-1 px-2 rounded cursor-pointer text-sm flex items-center hover:bg-gray-100 hover:text-gray-900">Edit</button>
      </div>

    </div>
  )
}

export default CardTask