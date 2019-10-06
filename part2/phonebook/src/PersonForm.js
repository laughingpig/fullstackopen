import React from 'react'

const PersonForm = ({addName, newName, updateName, newNumber, updateNumber}) => {
  return (
    <form onSubmit={addName}>
    <div>
      name: <input value={newName} onChange={updateName} />
    </div>
    <div>
      number: <input value={newNumber} onChange={updateNumber} />
    </div>        
    <div>
      <button type="submit">add</button>
    </div>
    </form>
  )
}

export default PersonForm

