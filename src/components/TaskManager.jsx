import React from 'react';
import CardTask from './CardTask';

const TaskManager = ( {taskList,setAssociated}) => {
    
  return (
    <>   
      <div className='grid grid-cols-1 md:grid  md:grid-cols-2 gap-3 '>
        {taskList.map(task => (<div key={task.id} > <CardTask task={task } setAssociated={setAssociated} /> </div>) )}
      </div>
    </>
  )
}

export default TaskManager