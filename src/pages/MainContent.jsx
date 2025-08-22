import { useEffect, useState } from 'react';
import ModalAddTask from '../components/ModalAddTaks';
import FabMenu from '../components/FabMenu'
import MainTask from './MainTask';
import PersonalInfo from './PersonalInfo';
const MainContent = ({ userData,setIsLogin,taskList,setTaskList }) => {
  const [associated, setAssociated] = useState([]);
  const [open, setOpen] = useState(false);
  const [showTask,setShowTask] = useState(false)
//
  return (
    <section className="rounded-lg flex justify-between p-4 min-h-[450px] sm:gap-3 bg-gray-950 border border-gray-500 m-2">
      <div className='flex'>
        {
          /* Mostrar MenuTask o la informacion personal segun corresponda (en pantallas mobiles)*/
          showTask ? <MainTask taskList={taskList} setAssociated={setAssociated}/> : <PersonalInfo associated={associated} userData={userData} />
        }
        {/*Esta seccion es solamente visible para el pc */}
        <div className='hidden sm:flex'>
          <MainTask taskList={taskList} setAssociated={setAssociated}/>
        </div>
      </div>
        {/* Menu Flotante */}
        <FabMenu setOpen={setOpen} showTask={showTask} setIsLogin={setIsLogin} setShowTask={setShowTask}/>
        {/* modal */}
        <ModalAddTask open={open} setOpen={setOpen} taskList={taskList} setTaskList={setTaskList}/>
    </section>
  );
};

export default MainContent;
