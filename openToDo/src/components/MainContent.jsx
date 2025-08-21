import { useEffect, useState } from 'react';
import CardInfo from './CardInfo';
import Pomodoro from './Pomodoro';
import InfoMode from './InfoMode';
import ModalAddTask from './ModalAddTaks';
import FabMenu from './FabMenu'
import MainTask from '../pages/MainTask';
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
    <section className="flex justify-between p-4 min-h-[450px] sm:gap-3 bg-gray-950 border border-gray-500 m-2">
      
      {/* lado izquierdo */}
      <div className="max-w-[500px] ">
        <div className='mb-4'>
          <CardInfo userData={userData} />
        </div>

        <div className="rounded border border-gray-500 bg-gradient-to-tl from-gray-800 to-gray-700">
          <div className="flex justify-end px-4 py-2">
            <button className="flex items-center p-1 text-xl rounded cursor-pointer transition-transform transform hover:scale-110 hover:shadow-lg " onClick={() => setIsPomodoro(!isPomodoro)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </button>
          </div>


          <div className='pb-4'>
            { isPomodoro ? <Pomodoro associated={associated}/> : <InfoMode  /> }
          </div>
        </div>
      </div>
      {/* lado Derecho */}
      <div>
        <MainTask taskList={taskList} setAssociated={setAssociated}/>
      </div>
      
      <div>
        {/* Menu Flotante */}
        <FabMenu setOpen={setOpen}/>
        {/* modal */}
        <ModalAddTask open={open} setOpen={setOpen} taskList={taskList} setTaskList={setTaskList}/>
      </div>
    </section>
  );
};

export default MainContent;
