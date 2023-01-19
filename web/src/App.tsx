import './styles/global.css'
import { Habit } from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={10}/>
      <Habit completed={37}/>
      <Habit completed={53}/>
    </div>
  )
}

export default App