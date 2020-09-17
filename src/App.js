import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CreateNote from './components/CreateNote'
import Note from './components/Note'
import {useState, useEffect} from 'react';
function App() {
  const [addItem, setAddItem] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [toBeEdited, setToBeEdited] = useState({title:"", content:"", color:null, index:null});

  // may be in edit mode or normal adding mode
  const addNote = (note)=>{
      // we can simply add
      setAddItem((prevData) =>{
        return[
          ...prevData,
          note
        ];
      })
      
    }
  
  

  const deleteNote = (id)=>{
    setAddItem((prevData)=>{
      return prevData.filter((value,idx)=> idx !== id);
    })
  }
  const deleteNoteArchive = (id)=>{
    setArchivedNotes((prevData)=>{
      return prevData.filter((value,idx)=> idx !== id);
    })
  }

  const editNote = async(id)=>{
    await setEdit(true);
    await console.log("before updating data", Date.now());
    await setToBeEdited((prevData)=>{
      return {
        ...prevData,
        index : id,
        title : addItem[id].title,
        content : addItem[id].content,
      }
    })
    await alert("done "+Date.now());
  }

  const archiveNote = async(id)=>{
    await setArchivedNotes((prevData)=>{
      return [...prevData, addItem[id]];
    });
    await deleteNote(id);
  }
  const unArchiveNote = async(id)=>{
    await setAddItem((prevData)=>{
      return [...prevData, {...archivedNotes[id],'color':0}];
    });
    await deleteNoteArchive(id);

    // setAddItem((prevData)=>{
    //   return prevData.filter((value,idx)=> idx !== id);
    // })
  }

  const labelNote = (id)=>{
    // setAddItem((prevData)=>{
    //   return prevData.filter((value,idx)=> idx !== id);
    // })
  }

  const colorNote = (id)=>{
       
    setAddItem((prevData)=>{
      const newArray = [...addItem];
      const item = {...newArray[id]};
      item.color = (item.color+1)%5; 
      newArray[id] = item;
      return newArray;
    });
  }

  useEffect(()=>{
    alert("edit mode changed to "+edit+ " "+Date.now());
    if(edit===true){
      console.log(toBeEdited);            
    }
  },[toBeEdited]);



  return (
    <div className="App">
        <Header/>
          <CreateNote passNote={addNote} data={toBeEdited}/>
          {
            addItem.length > 0 && !edit &&
          <div className="note-page">

            <div class="note-page-title"> Notes </div>
              <div className="notes-container">
                { addItem &&
                addItem.map((val,index)=>{
                  return <Note 
                  key={index} 
                  id = {index}
                  color={val.color}
                  title={val.title} 
                  content={val.content} 
                  onDelete={deleteNote}
                  onEdit = {editNote}
                  onArchive = {archiveNote}
                  onLabel = {labelNote}
                  onColor = {colorNote}
                  />
                } )}

              </div>
          </div>
          }

          {
            archivedNotes.length > 0 && !edit &&
          <div className="note-page">

            <div class="note-page-title"> Archived Notes </div>
              <div className="notes-container">
                {
                  archivedNotes.map((val,index)=>{
                  return <Note 
                  key={index} 
                  id = {index}
                  title={val.title} 
                  content={val.content} 
                  onDeleteArchive={deleteNoteArchive}
                  onUnArchive = {unArchiveNote}
                  // onEdit = {editNote}
                  // onArchive = {archiveNote}
                  // onLabel = {labelNote}
                  // onColor = {colorNote}
                  />
                })}

              </div>
          </div>
          }   

        <Footer/>
    </div>
  );
}

export default App;
