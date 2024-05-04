import logo from './logo.svg';
import './App.css';
import Create from './Component/CreateArea/Create';
import Note from './Component/Notes/Note';
import { useState } from 'react';
import Parent from './Parent';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Component/SignUp/SignUp'

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(newNote);
    setNotes(para => {
      return [...para, newNote]
    })
  }
  function handleDelete(id) {
    setNotes(para => {
      return para.filter((eachItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="App container pt-8">
      <Routes>
        <Route path='/' element={<Parent/>}/>
        <Route path='/signin' element={<SignUp/>}/>
      </Routes>
      <Create onAdd={addNote} />
      <div className="notes-container row">
        <div className="notes-wrapper col-6">
          {notes.map((eachItem, index) => {
            return (
              <Note
                id={index}
                key={index}
                onDelete={handleDelete}
                title={eachItem.title}
                content={eachItem.content}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
