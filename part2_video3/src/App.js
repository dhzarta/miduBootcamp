import { useEffect,useState } from 'react'
import { Note } from './note.js'
import { create as createNote, getAll as getAllNotes } from './services/notes/index.js'
//import { create as createNote, getAll as getAllNotes } from './services/notes'

export default function App () {
  const [notes, setNotes] = useState ([]);
  const [newNote, setNewNote] = useState ("");
  const [loading, setLoading] = useState (false);

  useEffect (() => {
    setLoading(true)
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);  

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("crear nota");
    const noteToAddToState = {
      id: 1,
      content: newNote,
      date: new Date().toISOString()
    };
    
    createNote(noteToAddToState).then((newNote) => {
    setNotes((prevNotes) => prevNotes.concat(newNote));
  
    });
    setNewNote("");
    //prevNotes.concat(newNote)
    //setNotes(notes.concat(noteToAddToState)
  };

console.log('render');

  return (
  <div>
    <h1>Notes</h1>  
      {loading ? "Cargando..." : ""}    
      <ol>
        {notes.map(note => <Note key={note.id} {...note} />)} 
      </ol>
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newNote} />
      <button >Crear nota</button>
    </form>
  </div>
  )
}