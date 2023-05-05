import {useState, useEffect} from 'react'

import phonebookService from "./services/phonebookService";

import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newPerson, setPerson] = useState('')
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
            // id: persons.length + 1
        }

        const alertString = `${newName} ${newNumber} is already added to phonebook`
        const filteredContacts = persons.filter(person => person.name === newName)

        const updatePerson = person => {
            const ok = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (ok) {
                phonebookService
                    .update(person.id, {...person, number: newNumber})
                    .then((updatedPerson) => {
                        setPersons(persons.map(p => p.id === person.id ? updatedPerson : p))
                    })
            }

        }

        if (filteredContacts.length > 0) {
            console.log(newNumber, contactObject.number)
            const person = filteredContacts.find(p => p.name === newName)

            if (person) {
                updatePerson(person)
            }
        } else {

            phonebookService.create(contactObject)
                .then(result => setPersons(persons.concat(result)))
                .catch(err => err.response.data.error)
        }
        clearAll()
    }

    const deleteContact = (person) => {
        const ok = window.confirm(`Delete ${person.name}?`)
        if (ok) {
            phonebookService.remove(person.id).then(() => {
                setPersons(persons.filter(p => p.id !== person.id))
            })
        }
    }

    useEffect(() => {
        phonebookService.getAll().then(result => setPersons(result))
    }, [])


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>Add a new</h2>
            <PersonForm addContact={addContact} newName={newName}
                        newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
            <h2>Numbers</h2>
            <Persons filter={filter} persons={persons} deleteContact={deleteContact}/>
        </div>
    )
}

export default App