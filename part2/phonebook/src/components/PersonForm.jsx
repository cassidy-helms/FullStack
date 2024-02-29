import React, { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({persons, setPersons, setMessage}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const updatePerson = (event) => {
        event.preventDefault()
    
        if(persons.some(person => person.name === newName)) {
            const person = persons.find(person => person.name === newName)
            const changedPerson = { ...person, number: newNumber }

            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
              personsService
                .updateNumber(person.id, changedPerson)
                .then(returnedPerson => {
                    setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
                    updateProperties({text: `Updated ${returnedPerson.name}`, type: 'success'})
                })
                .catch(error => {
                    updateProperties({text: `${changedPerson.name} was already removed from server`, type: `error`})
                    setPersons(persons.filter(person => person.id !== changedPerson.id))
                })
            }
        } else {
          const newPerson = {
            name: newName,
            number: newNumber
          }

          personsService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                updateProperties({text: `Added ${returnedPerson.name}`, type: 'success'})
            })
            .catch(error => {
                updateProperties({text: `${newPerson.name} was already removed from server`, type: `error`})
                setPersons(persons.filter(person => person.id !== newPerson.id))
            })
        }
    }

    const updateProperties = (message) => {
        console.log(message)
        setMessage(message)
        setNewName('')
        setNewNumber('')

        setTimeout(() => {
            setMessage(null)
        }, 5000)
    }
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Add a New Number</h2>
            <form onSubmit={updatePerson}>
            <div>
                name: <input onChange={handleNameChange} value={newName}/>
            </div>
            <div>
                number: <input onChange={handleNumberChange} value={newNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            </form>
        </div>
    )
}

export default PersonForm