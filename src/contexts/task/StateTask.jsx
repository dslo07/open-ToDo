    import { useState,useEffect } from "react";
    import { taskContext } from "./TaskContext";

    export const StateTask = ({ children })=>{
        const [taskList, setTaskList] = useState([]);
        const [ associated,setAssociated ] = useState([]);

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

        return(
            <taskContext.Provider value={{ taskList, associated, setTaskList, setAssociated }}>
                { children }
            </taskContext.Provider>
        )
    }
    export default StateTask