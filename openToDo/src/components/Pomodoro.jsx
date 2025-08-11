import React from 'react'


const Pomodoro = () => {
    const time = 25900
  return (
    <div className='flex justify-center items-center  flex-col'>
        <h2 className='text-8xl'>25:00</h2>
        <div>
            <button className='bg-gray-500 p-1 rounded cursor-pointer text-3xl'>Star Pomodoro</button>
        </div>
    </div>
  )
}

export default Pomodoro