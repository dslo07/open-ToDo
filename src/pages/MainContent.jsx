import { useState } from 'react';
import ModalAddTask from '../components/ModalAddTaks';
import FabMenu from '../components/FabMenu'
import MainTask from './MainTask';
import PersonalInfo from './PersonalInfo';
import { Toaster } from 'react-hot-toast'

const MainContent = () => {

  const [open, setOpen] = useState(false);
  const [showTask,setShowTask] = useState(false)
//
  return (
    <section className="rounded-lg flex justify-between p-4 min-h-[450px] bg-gray-950 border border-gray-500">
      <div className='flex'>
        {/* Mostrar MenuTask o la informacion personal segun corresponda (en pantallas mobiles)*/
          showTask ? <MainTask /> : <PersonalInfo />
        }
        {/*Esta seccion es solamente visible para el pc */}
        <div className='hidden lg:flex'>
          <MainTask />
        </div>
      </div>

        {/* flotantes */}
      <div>
        <FabMenu setOpen={setOpen} showTask={showTask}  setShowTask={setShowTask}/> {/*menu navegacion*/}
        <ModalAddTask open={open} setOpen={setOpen} /> {/* modal */}
        <Toaster position="top-center" reverseOrder={true} toastOptions={{ duration: 2000}}  /> {/*alert con mensajes*/}
      </div>
    </section>
  );
};

export default MainContent;
