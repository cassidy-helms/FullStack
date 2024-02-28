import React, { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
    
        if(persons.some(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
        } else {
          setPersons(persons.concat({name: newName, number: newNumber}))
          setNewName('')
          setNewNumber('')
        }
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
            <form onSubmit={addPerson}>
            <div>
                name: <input onChange={handleNameChange} />
            </div>
            <div>
                number: <input onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            </form>
        </div>
    )
}

export default PersonForm