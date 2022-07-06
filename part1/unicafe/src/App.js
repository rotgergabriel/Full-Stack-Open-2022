import React, { useState } from "react";
import './Statistic.css'

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

const Statistic = ({props, name}) => {
    return(
      <>
        <table>
          <tbody>
            <tr>
              <td className="table--td">{name}</td>
              <td className="table--td">{props}</td>
            </tr>
          </tbody>
        </table>
      </>
   )
}

const Statistics = ({ 
    good, 
    neutral, 
    bad,
    all, 
    average, 
    positive
  }) => {

    const textOne = 'No feedback given'

    if(all === 0) {
      return (
        <div>
            {textOne}
        </div>
      )
    }
     return(
        <>
          <Statistic props = {good} name='Good' />
          <Statistic props = {neutral} name='Neutral' />
          <Statistic props = {bad} name='Bad' />
          <Statistic props = {all} name='All' />
          <Statistic props = {average} name='Average'/>
          <Statistic props = {positive + '%'} name='Positive' />
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
  const average = (((good - bad) / 3) / 3).toFixed(1)
  const positive = ((good * 100) / all).toFixed(1)

  return (
      <>
        <Title props={TitleProps.title}/>
        <Buttons onClick={handleGoodClicks} text='Good' />
        <Buttons onClick={handleNeutralClicks} text='Neutral'/>
        <Buttons onClick={handleBadClicks} text='Bad'/>
        <Title props={TitleProps.secondTitle}/>
        <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            all= {all}
            average= {average} 
            positive={positive}
            />
      </>
  );
}

export default App;
