import React, { useContext } from "react";
import CardTask from "./CardTask";
import { taskContext } from "../contexts/task/TaskContext";

const Slider  = ()=>{
    const { associated } = useContext(taskContext)     
    return(
        
<div className="scrollbar-custom overflow-x-auto flex whitespace-nowrap w-full max-w-[480px] h-[160px] gap-3">
            {
                associated.map((task)=>(<CardTask key={task.id} task={task}/>))
            }
        </div>
    )
} 
export default Slider