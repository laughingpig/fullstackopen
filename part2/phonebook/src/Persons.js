import React from 'react'

const Persons = ({personList, deleteName}) => {
  return (
    <div>
      {personList.map(person => <div key={person.id}>{person.name} {person.number} <button onClick={() => deleteName(person.id, person.name)}>Delete</button></div>)}
    </div>
  )
}

export default Persons
