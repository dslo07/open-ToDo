import { useEffect, useState } from 'react';
import CardInfo from './CardInfo';
import Pomodoro from './Pomodoro';
import InfoMode from './InfoMode';
import ModalAddTask from './ModalAddTaks';
import NoContent from './NoContent';
import FabMenu from './FabMenu'
import TaskManager from './TaskManager';

const MainContent = ({ userData }) => {
  const [open, setOpen] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [associated, setAssociated] = useState({})

  // buscar si hay tareas guardadas
    useEffect(() => {
      const cacheList = JSON.parse(localStorage.getItem("listTask"));
      if (Array.isArray(cacheList) && cacheList.length > 0) {
        setTaskList(cacheList);
      } 
    }, []);

    // guarda en localStorage cada vez que taskList cambia
    useEffect(() => {
      localStorage.setItem("listTask", JSON.stringify(taskList));
    }, [taskList]);

  return (
    <section className="flex justify-between p-4 min-h-[450px] w-full sm:gap-3 bg-gray-950 border border-gray-500 m-2">
      
      {/* lado izquierdo */}
      <div className="max-w-[500px] ">
        <div className='mb-4'>
          <CardInfo userData={userData} />
        </div>

        <div className="rounded border border-gray-500 bg-gradient-to-tl from-gray-800 to-gray-700">
          <div className="flex justify-end px-4 py-2">
            <button className="flex items-center p-1 text-xl rounded cursor-pointer transition-transform transform hover:scale-110 hover:shadow-lg " onClick={() => setIsPomodoro(!isPomodoro)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </button>
          </div>


          <div className='py-4'>
            { isPomodoro ? <Pomodoro associated={associated}/> : <InfoMode  /> }
          </div>
        </div>
      </div>

      {/* lado Derecho */}
      <div className="sm:flex flex-col gap-4 flex-1 hidden">
        
        {/* filtros */}
        <div className="flex flex-wrap gap-2 p-3 border justify-between border-gray-500 rounded">
          <input type="text" placeholder="Filter by name" className="px-3 rounded bg-gray-900 text-white placeholder-gray-400" />
          <select name="priority" id="sltPriority" className="px-3 rounded bg-gray-900 text-white" >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="mid">Mid</option>
            <option value="low">Low</option>
          </select>
          <select name="priority" id="sltPriority" className="px-3 rounded bg-gray-900 text-white" >
            <option value="">Select time</option>
            <option value="Nearby">Nearby</option>
            <option value="Lately">Mid</option>
          </select>
          <div className='flex justify-end gap-2'>
            <button type="button" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0" aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </button>
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
          : <TaskManager taskList={taskList}  setAssociated={setAssociated}/>
        }
      </div>
      {/* Menu Flotante */}
      <FabMenu setOpen={setOpen}/>
      {/* modal */}
      <ModalAddTask open={open} setOpen={setOpen} taskList={taskList} setTaskList={setTaskList}/>
    </section>
  );
};

export default MainContent;
