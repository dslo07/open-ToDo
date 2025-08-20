import React from 'react';
import CardTask from './CardTask';
import Paginacion from './Paginacion';

const TaskManager = ( {taskList,setAssociated}) => {
    
  return (
    <>   
      <div className='grid grid-cols-2 gap-3'>
        {taskList.map(task => (<div key={task.id}> <CardTask task={task } setAssociated={setAssociated} /> </div>) )}
      </div>
      <div className='flex justify-center'>
      </div>
    </>
  )
}

export default TaskManager