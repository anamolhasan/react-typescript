
import './App.css'
import Form from './components/Form'
import Greeting from './components/Greeting'

function App() {

  const name = 'anamol hasan'
  const age = 27
 

  return (
    <>
      <h1>React + Typescript Project</h1>
     <Greeting name={name} age={age}/>

     <Form />
    </>
  )
}

export default App
