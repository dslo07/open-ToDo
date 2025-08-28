import {React,useState} from "react";
import CardInfo from "../components/CardInfo";
import Pomodoro from "../components/Pomodoro";
import InfoMode from "../components/InfoMode";
export const PersonalInfo = ({ associated }) =>{
  const [isPomodoro, setIsPomodoro] = useState(true);

    return(
    <div >
        <div className='mb-4'>
          <CardInfo/>
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
    )
}

export default PersonalInfo