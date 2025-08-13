import React from 'react'

const CardTask = ({ task }) => {

  

  const setPriority= (priority)=>{
    const priorityClass = '';
    const priorityHight = 'red';
    const priorityMid   = 'yellow';
    const prioritylow   = 'Green';

    if(priority === 'high'){
        
    }else if( priority === 'mid'){

    }else if( priority === 'low'){

    }
    return priorityClass
  }

    //setPriority(task.priority)
    return (
    <div id={task.id} className='bg-gradient-to-tl from-gray-800 to-gray-600 p-3' >
        <div className='flex justify-between '>
            <span className='text-sm border-[2px] py-1 px-2 rounded border-green-800 bg-green-600'>{
           String.toString( task.priority)}</span>
            <span className='text-sm border-[1px] border-gray-900 bg-gray-600'>{task.expiration}</span>
        </div>
        <div >
            <h3 className='text-center'>{task.name}</h3>
            <p>{task.description}</p>
        </div>
    </div>
  )
}

export default CardTask