import React from 'react';
import CardTask from './CardTask';

const TaskManager = ( {taskList}) => {
    
  return (
    <>   
      <div className='grid grid-cols-1 md:grid  md:grid-cols-2 gap-3 '>
        {taskList.map(task => (<div key={task.id} > <CardTask task={task }  /> </div>) )}
      </div>
    </>
  )
}

export default TaskManager