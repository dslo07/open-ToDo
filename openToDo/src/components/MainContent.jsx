import { useEffect,useState} from 'react'
import CardInfo from './CardInfo'
import Pomodoro from './Pomodoro'
const MainContent = () => {
  const [isPomodoro,setIsPomodoro] = useState(true)
  return (
    <section className='bg-gray-950 h-100 p-4 border-1 border-gray-500 gap-4 max-w-3xl '>
      <div>
        <CardInfo /> 
      </div>
      <div  className='w'>
        <div className='block'>
          { isPomodoro ? <Pomodoro/> : <openChat/>}
        </div>
      </div>
    </section>
  )
}

export default MainContent