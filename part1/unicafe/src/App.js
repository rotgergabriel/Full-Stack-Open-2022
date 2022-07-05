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

const Display = ({props, name}) => {
    return(
      <>
        <p>{name} {props}</p>
      </>
   )
}

const Statistics = ({
    allClicks, 
    all, 
    average, 
    positive, 
    allName, 
    averageName, 
    positiveName, 
    operator, 
    good, 
    neutral, 
    bad
  }) => {

    const textOne = 'No feedback given'

    if((allClicks.length === 0)) {
      return (
        <div>
            {textOne}
        </div>
      )
    }
     return(
        <>
          <Display props = {good} name='Good: '/>
          <Display props = {neutral} name='Neutral: '/>
          <Display props = {bad} name='Bad: '/>
          <p>{allName} {all} </p>
          <p>{averageName} {average} </p>
          <p>{positiveName} {positive} {operator}</p>
        </>
     )
}


const App =() => {

  const TitleProps = {
    title: 'Give feedback', 
    secondTitle:'Statistics'
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClicks = () => {
    setAll(allClicks.concat(good))
    setGood(good + 1)
  }

  const handleNeutralClicks = () => {
    setAll(allClicks.concat(neutral))
    setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
    setAll(allClicks.concat(bad))
    setBad(bad + 1)
  }

  //I could have used all instead of defining a new allClicks state, but it seemed more correct this way
  const all = good + neutral + bad
  const average = ((good - bad) / 3) / 3
  const positive = (good * 100) / all

  return (
      <>
        <Title props={TitleProps.title}/>
        <Buttons onClick={handleGoodClicks} text='Good' />
        <Buttons onClick={handleNeutralClicks} text='Neutral'/>
        <Buttons onClick={handleBadClicks} text='Bad'/>
        <Title props={TitleProps.secondTitle}/>
        <Statistics
            allClicks={allClicks} 
            good={good}
            neutral={neutral}
            bad={bad}
            all= {all}
            average= {average} 
            positive={positive}
            allName='All: '
            averageName='Average: '
            positiveName='Positive: '
            operator={'%'}
            />
      </>
  );
}

export default App;
