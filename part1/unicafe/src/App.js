import React, { useState } from "react";

const Title = ({props}) => {
  return(
    <h1>{props}</h1>
  )
}

const Buttons = ({onClick, text}) => {
   return (
    <>
      <button onClick={onClick}> {text} </button>
    </>
   )
}

const Display = ({props, name, operator}) => {
    return(
      <>
        <p>{name} {props} {operator}</p>
      </>
   )
  
  
}


const App =() => {

  const TitleProps = {
    title: 'Give feedback', 
    subTitle:'Statistics'
  }

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

  const all = good + neutral + bad
  const average = ((good - bad) / 3) / 3
  const positive = (good * 100) / all

  return (
      <>
        <Title props={TitleProps.title}/>
        <Buttons 
            onClick={handleGoodClicks} 
            text='Good' />
        <Buttons 
            onClick={handleNeutralClicks} 
            text='Neutral'/>
        <Buttons 
            onClick={handleBadClicks} 
            text='Bad'/>
        <Title props={TitleProps.subTitle}/>
        <Display props = {good} name='Good: '/>
        <Display props = {neutral} name='Neutral: '/>
        <Display props = {bad} name='Bad: '/>
        <Display props= {all} name='All: '/>
        <Display props= {average} name='Average: '/>
        <Display props= {positive} name='Positive: ' operator={'%'} />
      </>
  );
}

export default App;
