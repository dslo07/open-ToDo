import { useEffect, useState } from 'react';
import ModalAddTask from './ModalAddTaks';
import FabMenu from './FabMenu'
import MainTask from '../pages/MainTask';
import PersonalInfo from '../pages/PersonalInfo';
const MainContent = ({ userData,setIsLogin,taskList,setTaskList }) => {
  const [associated, setAssociated] = useState({});
  const [open, setOpen] = useState(false);
  const [showTask,setShowTask] = useState(false)
//
  return (
    <section className="rounded-lg flex justify-between p-4 min-h-[450px] sm:gap-3 bg-gray-950 border border-gray-500 m-2">

        {
          /* Mostrar MenuTask o la informacion personal segun corresponda */
          showTask ? <MainTask taskList={taskList} setAssociated={setAssociated}/> : <PersonalInfo associated={associated} userData={userData} />
        }
        {/* Menu Flotante */}
        <FabMenu setOpen={setOpen} showTask={showTask} setIsLogin={setIsLogin} setShowTask={setShowTask}/>
        {/* modal */}
        <ModalAddTask open={open} setOpen={setOpen} taskList={taskList} setTaskList={setTaskList}/>
    </section>
  );
};

export default MainContent;
