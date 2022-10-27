import { useState } from 'react'
import {Note} from './note.js'

export default function App () {
  const [notes, setNotes] = useState ([])
  const [newNote, setNewNote] = useState ('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    }
    setNotes(notes.concat(noteToAddToState)) 
    setNewNote("")
  }


  return (
  <div>
    <h1>Notes</h1>  
      <ol>
        {notes.map(note => <Note key={note.id} {...note} />)} 
      </ol>
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newNote} />
      <button >Crear nota</button>
    </form>
  </div>
  )
};