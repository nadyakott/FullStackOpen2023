import {useState} from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filteredPersons, setFitleredPersons] = useState([])

    const addContact = (event) => {
        event.preventDefault()

        const contactObject = {
            name: newName,
            number: newNumber
        }

        const alertString = `${newName} ${newNumber} is already added to phonebook`
        const filteredContacts = persons.filter(person => person.name === newName && person.number===newNumber)

        if (filteredContacts.length > 0) {
            alert(alertString)
        } else {
            setPersons(persons.concat(contactObject))
        }

        // setPersons(persons.concat(contactObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilteredName = (event) => {
        console.log(event.target.value)
        const filterPattern = event.target.value

        const filteredPersonsTemp = filterPattern === '' ? persons
            : persons.filter(person =>person.name.toLowerCase().includes(filterPattern.toLowerCase()))

        setFitleredPersons(filteredPersonsTemp)

        // setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown as<input onChange={handleFilteredName}/>
            </div>
            <form onSubmit={addContact}>
                <div>
                    name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
                </div>
                <div>

                    number: <input

                    value={newNumber}
                    onChange={handlePhoneChange}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {filteredPersons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default App