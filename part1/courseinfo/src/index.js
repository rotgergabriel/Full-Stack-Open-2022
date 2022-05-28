import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <Part
        data1={props.part1}
        data2={props.exercises1}
      />
      <Part
        data1={props.part2}
        data2={props.exercises2}
      />
      <Part
        data1={props.part3}
        data2={props.exercises3}
      />
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <>
      <p>
        {props.data1} {props.data2}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development' 
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header 
        course={course}
      />
      <Content
        part1={part1} 
        exercises1={exercises1}
        part2={part2} 
        exercises2={exercises2}
        part3={part3} 
        exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)