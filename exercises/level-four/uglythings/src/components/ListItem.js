import React, {useContext, useState} from "react"
import { ThemeContext } from "../ThemeContext";

export default function ListItem(props){
   const {handleDelete, handleEdit, editUglyThing, newInput, setNewInput} = useContext(ThemeContext)
    const {title, description, imgUrl} = props


    function handleChange(event){
        const {name, value} = event.target
        setNewInput(prevThing => ({...prevThing, [name]: value}))
    }
    

    
    const [editMode, setEditMode] = useState(false)
    function editThing(e){
        editUglyThing(props.id, newInput)
        setNewInput({
            title: "",
            description: ""
        })
        setEditMode(false)
    }

    return (
        <>
        {!editMode && <div id={props.id} className="list--container">
            <h1>{title}</h1>
            <img src={imgUrl} height="200px" />
            <h3>{description}</h3>
            <button onClick={() => handleDelete(props.id)}>Delete</button>
            <button onClick={setEditMode}>Edit</button>
        </div>}

        {editMode && <div className="list--container">
            <input placeholder="" onChange={handleChange} name="title" value={newInput.title} required/>
            <img src={props.imgUrl} height="200px" />
            <input placeholder="" onChange={handleChange} name="description" value={newInput.description} required/>
            <button onClick={editThing}>Save</button>
            </div>}

        </>
    )}


