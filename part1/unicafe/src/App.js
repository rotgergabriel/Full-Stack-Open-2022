import React, { useState } from "react";

const Buttons = ({onClick, text}) => {
   return (
    <>
      <button onClick={onClick}> {text} </button>
    </>
   )
}

const Display = ({props, name}) => {
  console.log(name)
  return(
    <>
      <p>{name} {props}</p>
    </>
  )
}

const App =() => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    setGood(good + 1)
  }

  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
    setBad(bad + 1)
  }

  return (
      <>
        <h1>Give feedback</h1>
        <Buttons 
            onClick={handleGoodClicks} 
            text='Good' />
        <Buttons 
            onClick={handleNeutralClicks} 
            text='Neutral'/>
        <Buttons 
            onClick={handleBadClicks} 
            text='Bad'/>
        <h1>Statistics</h1>
        <Display props = {good} name='Good'/>
        <Display props = {neutral} name='Neutral'/>
        <Display props = {bad} name='Bad'/>
      </>
  );
}

export default App;
