import { useEffect, useState } from 'react';
import CardInfo from './CardInfo';
import Pomodoro from './Pomodoro';
import OpenChat from './OpenChat';
import ModalAddTask from './ModalAddTaks';
import NoContent from './NoContent';
import TaskManager from './TaskManager';

const MainContent = ({ userData }) => {
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [open, setOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  return (
    <section className="flex justify-between p-4 min-h-[450px] w-[1220px] bg-gray-950 border border-gray-500">
      
      {/* lado izquierdo */}
      <div className="mr-3 max-w-[500px] flex flex-col gap-4">
        
        <CardInfo userData={userData} />

        <div className="rounded border  h-[305px] border-gray-500 bg-gradient-to-tl from-gray-800 to-gray-700">
          <div className="flex justify-end px-4 py-2">
            <button className="flex items-center p-1 text-xl rounded cursor-pointer transition-transform transform hover:scale-110 hover:shadow-lg " onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap justify-center px-4 pb-4">
            <Pomodoro />
          </div>
        </div>
      </div>

      {/* lado Derecho */}
      <div className="flex flex-col gap-4 flex-1">
        
        {/* filtros */}
        <div className="flex flex-wrap gap-2 p-3 border justify-between border-gray-500 rounded">
          <input type="text" placeholder="Filter by name" className="px-3 rounded bg-gray-900 text-white placeholder-gray-400" />
          <select name="priority" id="sltPriority" className="px-3 rounded bg-gray-900 text-white" >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="mid">Mid</option>
            <option value="low">Low</option>
          </select>
          <input type="date" name="" id=""  className="px-3 rounded bg-gray-900 text-white placeholder-gray-400" />
          <div className='flex justify-end gap-2'>
            <button type="button" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0" aria-label="Previous">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5" >
                <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
            </button>
            <button type="button" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0" aria-label="Next" >
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5"  >
                <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* tareas */}
        {taskList.length <= 0
          ? <NoContent />
          : <TaskManager taskList={taskList} />
        }
      </div>

      {/* modal */}
      <ModalAddTask open={open} setOpen={setOpen} taskList={taskList} setTaskList={setTaskList}/>
    </section>
  );
};

export default MainContent;
