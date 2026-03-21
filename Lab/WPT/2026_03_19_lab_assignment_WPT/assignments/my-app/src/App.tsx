// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Counter from "./components/1_class_component_counter/1_class_component_counter"
import LoginFormClassComponent from "./components/2_class_component_login_form/2_class_component_login_form"
import LifecycleDemo from "./components/3_class_component_lifecycle/3_class_component_lifecycle"
import ToDoClassComponent from "./components/4_class_component_todo_ordered_list/4_class_component_todo_ordered_list"


function App() {

  return (
    <>
      
      {/* <EvenChecker></EvenChecker> */}
      {/* <br /> */}
      {/* <br /> */}
      {/* <DisplayMessage></DisplayMessage> */}

      <h2>Assignment 1: Class Component (counter)</h2>
      <Counter></Counter>
      <hr />
      <h2>Assignment 2: Login Form Class Component</h2>
      <LoginFormClassComponent></LoginFormClassComponent>
      <hr />
      <h2>Assignment 3: Class Component LifeCycle</h2>
      <LifecycleDemo message="Hello World"></LifecycleDemo>
      <hr />
      <h2>Assignment 4: Class Component To Do List</h2>
      <ToDoClassComponent></ToDoClassComponent>

    </>
  )
}

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

export default App
