import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/PersonService'
import Notification from './Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    personService.getAll()
    .then(initialPersons =>
      setPersons(initialPersons)
    )
  }, [])

  const personfilter = (filterText === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase())); 

  const addName = (event) => {
    event.preventDefault()
    const personId = persons.find(person => person.name === newName)
    if (personId) {
      if (window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)){
        personService.updatePerson(personId.id, {...personId, number:newNumber})
        .then(response => {
          setPersons(persons.map(person => person.id !== response.id ? person : response))
          setErrorMessage(`Updated ${newName} successfully.`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)            
        })
        .catch(error => {
          setErrorMessage(`Information of ${newName} has already been removed from the server.`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)            
        })        
      }
      setNewName('')
      setNewNumber('')
    }
    else {
      if (newName && newNumber){
        personService.addPerson({name: newName, number: newNumber})
        .then(response => {
          setPersons(persons.concat(response))
          setErrorMessage(`Added ${newName}.`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)           
        })
        setNewName('')
        setNewNumber('')        
      }
      else {
        setErrorMessage('Please complete all fields.')

      }
    }
  }

  const deleteName = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) { 
      personService.deletePerson(id)
      .then(response => {
        if(response.status === 200){
          setPersons(persons.filter(person => person.id !== id))
        }
        setErrorMessage(`Deleted ${name}.`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)        
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  const updateName = (event) => {
    setNewName(event.target.value)
  }

  const updateNumber = (event) => {
    setNewNumber(event.target.value)
  }  

  const updateFilter = (event) => {
    setFilterText(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification errorMessage={errorMessage} />
      <Filter filterText={filterText} updateFilter={updateFilter} />
      <h3>Add a new person</h3>
      <PersonForm addName={addName} newName={newName} updateName={updateName} newNumber={newNumber} updateNumber={updateNumber} />
      <h2>Numbers</h2>
      <Persons personList={personfilter} deleteName={deleteName} />
    </div>
  )
}

export default App