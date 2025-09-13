
import './App.css'
import Form from './components/Form'
import Greeting from './components/Greeting'
import ToggleButton from './components/ToggleButton'
import Task from './useRef/Task'

function App() {

  const name = 'anamol hasan'
  const age = 27
 

  return (
    <div  className="h-screen bg-white dark:bg-black dark:text-white">
      <h1>React + Typescript Project</h1>
     {/* <Greeting name={name} age={age}/> */}
  <ToggleButton />
     {/* <Form /> */}
     <Task />
    </div>
  )
}

export default App
