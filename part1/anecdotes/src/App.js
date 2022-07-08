import React, { useState } from "react";

const Header = ({text}) => {
  return(
      <h1> {text} </h1>
  )
}

const Button = ({handleClicks, text}) => {
    return(
        <button onClick={handleClicks}>{text}</button>
    )
}

const Points = ({points, text}) => {
    return(
        <p>
            {text} {points}
        </p>
    )
}

const Anecdotes = ({anecdotes, points, textNo, textHas, textVotes}) => {
    return(
        <>
            <p>{anecdotes}</p>
            <p> {textNo} {textHas} {points} {textVotes} </p>
        </>
    )
}

const Winner = ({anecdotes, points, text}) => {
  if(points.reduce((a, b)=> a + b, 0) > 0) {
    const result = points.indexOf(Math.max(...points))
    return <Anecdotes textHas={text.name2} textVotes={text.name1} anecdotes={anecdotes[result]} points={points[result]} />
  }else {
    return <Anecdotes textNo={text.name3} />
  }
}


  
const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
    
    const handleAnecdote = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const handlePoints = () => {
      const _points = [...points];
      _points[selected] += 1;
      setPoints(_points);
    }

    const text = {
      name: 'Next anecdote',
      name1: 'Votes',
      name2: 'Has',
      name3: 'No existing votes',
      name4: 'Anecdote of the day',
      name5: 'Anecdote with most votes'
    }

    return (
        <div>
          <Header text={text.name4} />
          <Button text={text.name} handleClicks={handleAnecdote} />
          <Anecdotes anecdotes={anecdotes[selected]} />
          <Points text={text.name1} points={points[selected]} />
          <Button text={text.name1} handleClicks={handlePoints} />
          <Header text={text.name5} />
          <Winner text={text} anecdotes={anecdotes} points={points} />
        </div>
    );
}

export const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export default App;