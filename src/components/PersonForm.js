export default function PersonForm({addContact, newName, setNewName, newNumber, setNewNumber}) {
return    <form onSubmit={addContact}>
                <div>
                    name: <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                </div>
                <div>
                    number: <input
                    value={newNumber}
                    onChange={(event => setNewNumber(event.target.value))}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
}