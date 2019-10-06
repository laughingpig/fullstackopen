import React from 'react'

const Header = ({name}) =>
  <h3>{name}</h3>

const Total = ({parts}) => {
  const total = parts.reduce((a,b) => a + b.exercises, 0)

  return <p><strong>Total of {total} exercises</strong></p>
}

const Content = ({parts}) => {
  const partlist = parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id} /> )

  return (
    <div>
      {partlist}
      <Total parts={parts} />
    </div>
  )
}

const Part = ({name, exercises, id}) =>
  <p>{name} {exercises}</p>

const Course = ({course}) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </div>
)

export default Course