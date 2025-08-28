import { useEffect, useState,useContext } from "react"
import { taskContext }  from '../contexts/task/TaskContext'
import NoContent from '../components/NoContent'
import TaskManager from '../components/TaskManager'

const MainTask = ({ setAssociated }) => {
  const [ filter,setFilter ] = useState("");  
  const { taskList } = useContext(taskContext); 
  const [ list,setList ] = useState([]);

  useEffect(() => {
    const filtered = list.filter((task) => {
      switch (filter) {
        case "Ready":
          return task.priority === "Ready";
        case "High":
          return task.priority === "High";
        case "Mid":
          return task.priority === "Mid";
        case "Low":
          return task.priority === "Low";
        default:
          return true; // Por si acaso el filtro no es reconocido
      }
    });
    setList(filtered);
  }, [filter, taskList]);
  
  useEffect(()=>{
    setList(taskList);    
  },[taskList])

    return (
    <div className="flex-col gap-2 px-2 items-center "> 
        {/* filtros */}
        <div className="flex flex-col justify-between items-start border-gray-500 rounded p-2 gap-4">
          {/* Inputs de filtro */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Filter by name"
              className="px-3 py-2 rounded bg-gray-900 text-white placeholder-gray-400 w-full md:w-60"
            />

            <select
              name="priority"
              id="priority"
              className="px-3 py-2 rounded bg-gray-900 text-white w-full md:w-48"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            
            >
              <option value="">Priority</option>
              <option value="All">All</option>
              <option value="High">High</option>
              <option value="Mid">Mid</option>
              <option value="Low">Low</option>
            </select>

            <select
              name="time"
              id="time"
              className="px-3 py-2 rounded bg-gray-900 text-white w-full md:w-48"
            >
              <option >Time</option>
              <option value="All">All</option>
              <option value="Nearby">Nearby</option>
              <option value="Lately">Lately</option>
            </select>
          </div>

          {/* Botones de paginación */}
          <div className="flex gap-2 justify-start ">
            <button
              type="button"
              className="inline-flex items-center rounded-l-md  border px-2 py-2 text-gray-400 hover:bg-white/5"
              aria-label="Previous"
              onClick={()=>{setFilter("Ready")}}
            >
              {/* Icono 1 */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
            </button>

            <button
              type="button"
              className="inline-flex items-center px-2 py-2 rounded-s border text-gray-400 hover:bg-white/5"
              aria-label="Previous"
            >
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                      <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
            </button>

            <button
              type="button"
              className="inline-flex items-center border rounded-r-md px-2 py-2 text-gray-400 hover:bg-white/5"
              aria-label="Next"
            >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5" > <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" /> </svg>
            </button>
          </div>
        </div>

        <div className="mt-auto h-auto">
          {/* tareas */}
          {taskList.length <= 0 
            ? <NoContent />
            : <TaskManager taskList={list}  setAssociated={setAssociated}/>
          }
        </div>

      </div>
    ) 
}

export default MainTask