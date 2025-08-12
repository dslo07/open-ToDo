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
    <div className='flex justify-center items-center  flex-col gap-4'>
        <h2 className='text-8xl'>{minute}:{second < 10 ? "0"+ second : second}</h2>
        <div>
            <button className='bg-gray-800 p-1 rounded cursor-pointer text-3xl px-3' onClick={()=>{setState(!state)}}> {state ? "Pause" : "Start"} Pomodoro</button>
        </div>
    </div>
  )
}

export default Pomodoro