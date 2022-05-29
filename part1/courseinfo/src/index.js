import React from 'react'
//I had an error importing only 'react-dom', I had to add it as 'react-dom/client'
import ReactDOM from 'react-dom/client' 

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log('Content')
  console.log(props)

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
  // console.log(props)
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

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <>
      <Header 
        course={course}
      />
      <Content
        part1={part1.name} 
        exercises1={part1.exercises}
        part2={part2.name} 
        exercises2={part2.exercises}
        part3={part3.name} 
        exercises3={part3.exercises}
      />
      <Total 
        exercises1={part1.exercises} 
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </>
  )
}

// I corrected the render since it generated an error in the console for the version
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)