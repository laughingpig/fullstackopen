import React from 'react'

const Filter = ({filterText, updateFilter}) => {
  return (
    <div>
    filter shown on: <input value={filterText} onChange={updateFilter} />
    <br></br>
    </div>
  )
}

export default Filter