import personsService from '../services/persons'

const Persons = ({ persons, setPersons, filter }) => {
    const deletePerson = (id) => {
        const person = persons.find(person => person.id === id)

        if(window.confirm(`Delete ${person.name}?`)) {
            personsService
                .deletePerson(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }
    
    return (
        <div>
            <h2>Numbers</h2>
            {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) => 
                <div key={person.id}>
                    {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
                </div>
            )}
        </div>
    )
}

export default Persons