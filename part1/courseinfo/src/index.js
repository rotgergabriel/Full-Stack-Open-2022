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
  const newData = props.data
  console.log('Content')
  console.log(newData)

  return(
    <>
      <Part
        data1={newData[0].name}
        data2={newData[0].exercises}
      />
      <Part
        data1={newData[1].name}
        data2={newData[1].exercises}
      />
      <Part
        data1={newData[2].name}
        data2={newData[2].exercises}
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
  // console.log(props.data[0])
  const newData = props.data
  console.log('Total')
  console.log(newData)

  return(
    <>
      <p>Number of exercises {newData[0].exercises + newData[1].exercises + newData[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header 
        course={course}
      />
      <Content data = {parts}
        // part1={part1.name} 
        // exercises1={part1.exercises}
        // part2={part2.name} 
        // exercises2={part2.exercises}
        // part3={part3.name} 
        // exercises3={part3.exercises}
      />
      <Total data = {parts}
        // exercises1={part1.exercises} 
        // exercises2={part2.exercises}
        // exercises3={part3.exercises}
      />
    </>
  )
}

// I corrected the render since it generated an error in the console for the version
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)