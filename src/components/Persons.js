export default function PersonsList({filter, persons}) {
    const filteredPersons = filter === '' ? persons
            : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
return <ul>
       {filteredPersons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
    </ul>
}