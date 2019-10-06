import axios from 'axios'

const base = 'http://localhost:3002/persons'

const getAll = () => {
  const request = axios.get(`${base}`)
  return request.then(response => response.data)
  .catch(error => {
    console.log("error. not found")
  })
}

const addPerson = (person) => {
  const request = axios.post(`${base}`, person)
  return request.then(response => response.data)
  .catch(error => {
    console.log("error")
  })  
}

const updatePerson = (id, person) => {
  const request = axios.put(`${base}/${id}`, person)
  return request.then(response => response.data)
  .catch(error => {
    console.log("error")
  })  
}

const deletePerson = (id) => {
  const request = axios.delete(`${base}/${id}`)
  return request
}

export default {getAll, addPerson, updatePerson, deletePerson}