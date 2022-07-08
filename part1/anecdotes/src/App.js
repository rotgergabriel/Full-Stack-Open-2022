import React, { useState } from "react";

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

const Anecdotes = ({anecdotes}) => {
    return(
        <p>
            {anecdotes}
        </p>
    )
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
      name1: 'Votes'
    }

    return (
        <div>
          <Button text={text.name} handleClicks={handleAnecdote} />
          <Anecdotes text={text} anecdotes={anecdotes[selected]} />
          <Button text={text.name1} handleClicks={handlePoints} />
          <Points text={text.name1} points={points[selected]} />
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