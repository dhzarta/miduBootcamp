
import { Name } from './note.js'
import { useState } from 'react'


  const App = () => {
    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
  

    const handleChange = (event) => {
      setNewName(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault() 
      const newNameToAdd = {
        id: persons.length + 1,
        name: newName,
      }
      console.log(newNameToAdd)
      if(persons.includes(newNameToAdd)) { 
        window.alert(`${newNameToAdd} already exist on the list`);
      } else {
        setPersons(persons.concat(newNameToAdd))
        setNewName("")
      }
      console.log(newNameToAdd)
    }
    /*
    const personsCheck = persons => {
      if (!persons.includes(newName)) {  
       return newName
      } else {
        window.alert({newName}, "already exist on the list");
      }
    }
*/
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input type='text' onChange={handleChange} value={newName} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
         <ol>
         {persons.map(names => <Name key={names.name} {...names} />)}
         </ol>
      </div>
    )
  }

export default App;