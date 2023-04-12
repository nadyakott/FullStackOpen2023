import phonebook from "../services/phonebookService";

export default function PersonsList({filter, persons, deleteContact}) {
    const filteredPersons = filter === '' ? persons
            : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

return <div>
       {filteredPersons.map(person => <p key={person.id}>{person.name} {person.number}
       <button onClick={() => deleteContact(person)}>
            delete
          </button>
       </p>)}
    </div>
}