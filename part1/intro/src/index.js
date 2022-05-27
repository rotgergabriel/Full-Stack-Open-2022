import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Gabriel' age={10+24}/> 
      <Hello name='Daniela' age={29}/>
    </div>
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)