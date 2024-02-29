import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personsService from './services/persons'
import './app.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [message, setMessage] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      {message ? <Notification message={message}/> : null}
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} />
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  )
}

export default App