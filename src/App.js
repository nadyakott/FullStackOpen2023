import {useState, useEffect} from 'react'
import Filter from "./components/Fitler";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";


const App = () => {
    const [persons, setPersons] = useState([])
    // const [persons, setPersons] = useState([
    //     {name: 'Arto Hellas', number: '040-123456', id: 1},
    //     {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    //     {name: 'Dan Abramov', number: '12-43-234345', id: 3},
    //     {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    // ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const clearAll = () => {
        setNewName('')
        setNewNumber('')
    }

    const addContact = (event) => {
        event.preventDefault()

        const contactObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1

        }

        const alertString = `${newName} ${newNumber} is already added to phonebook`
        const filteredContacts = persons.filter(person => person.name === newName && person.number === newNumber)

        if (filteredContacts.length > 0) {
            alert(alertString)
        } else {
            setPersons(persons.concat(contactObject))
        }
        clearAll()
    }

    const fetchPhonebook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }
    useEffect(fetchPhonebook, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <PersonForm addContact={addContact} newName={newName}
                        newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
            <h2>Numbers</h2>
            <Persons filter={filter} persons={persons}/>
        </div>
    )
}

export default App