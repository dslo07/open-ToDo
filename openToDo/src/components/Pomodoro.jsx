import {useEffect, useState } from 'react'


const Pomodoro = () => {
  const [minute,setMinute] = useState(25);
  const [second,setSecond] = useState(59);
  const [state,setState] = useState(false);

  useEffect(()=>{
    if(state){
      setTimeout(() => {
        setSecond(second - 1)
        if(second === 0){
          setMinute(minute - 1);
          setSecond(60);
        }
      }, 1000);
    }else{

    }
  },[state,second])

  return (
    <div className=' flex justify-center items-center flex-col gap-4 '>
        <h2 className='text-8xl'>{minute}:{second < 10 ? "0"+ second : second}</h2>
        <div>
            <button className="border py-1 px-2 rounded cursor-pointer text-6l flex items-center hover:bg-gray-100 hover:text-gray-900" onClick={()=>{setState(!state)}}> {state ? "Pause" : "Start"} Pomodoro</button>
        </div>
        <div className='flex gap-3'>
          <button className="border py-1 px-2 rounded cursor-pointer text- flex items-center  hover:bg-gray-100 hover:text-gray-900">Change Time</button>
          <button className="border py-1 px-2 rounded cursor-pointer text-sm flex items-center hover:bg-gray-100 hover:text-gray-900">Rest Time</button>
        </div>
    </div>
  )
}

export default Pomodoro