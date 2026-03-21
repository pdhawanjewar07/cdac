import logo from './logo.svg';
import './App.css';

import Demo from './demo'

import SayHello from './dataaccess'

import Addition from './add'
import Data from './input'

import MyClass from './testClass';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      From React
      <h1>
        <Demo ></Demo>
      </h1>
      <h2>
        <SayHello name={"Rahul"}></SayHello>
        <br /><SayHello name={"Amit"}></SayHello>
      </h2>

      <h2><Addition num1={12} num2={25}></Addition></h2>

      <Data></Data>

      <MyClass></MyClass>
    </div>
  );
}

export default App;
