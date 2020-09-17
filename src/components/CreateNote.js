import React from 'react'
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {useState} from 'react';
import UpdateIcon from '@material-ui/icons/Update';

export default function CreateNote({passNote, data}) {
    const [note, setNote] = useState({
        title:"",
        content:"",
        color : 0
    });

    console.log("data is" , data);
    

    const emptyNote = { title:"",content:"",color : 0 };
    // updateing on change
    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setNote((prevData)=>{ 
        return {
            ...prevData,
            [name]:value,
            };
        });
    }
    // Adding note
    const AddEvent = async()=>{
        
        if(note.content || note.title ){
            await passNote(note);
            await setNote(emptyNote);            
        }
        else alert("Cannot be empty");
    }

    return (
        <div>

            <div className="main_note">
                <form>
                    <div className="create-note-content">
                        <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="title" autoComplete="off"/>
                        <textarea name="content" value={note.content} onChange={InputEvent} rows="5" column="6" placeholder="Write a note"/>
                    </div>
                    <div class="plusButton">
                        <Button onClick={AddEvent} variant="contained" color="secondary">
                                <UpdateIcon/> 
                                <AddIcon  className="plus_sign"/>
                        </Button>

                    </div>
                </form>
            </div>

            
        </div>
    )
}
