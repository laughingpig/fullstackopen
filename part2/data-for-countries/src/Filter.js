import React from 'react'

const Filter = ({filterText, setFilterText}) => {
  const updateFilter = (event) => {
    setFilterText(event.target.value)
  }

  return (
    <div>
      find countries <input value={filterText} onChange={updateFilter} />
    </div>
  )
}

export default Filter