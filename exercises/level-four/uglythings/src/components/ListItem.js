import React, {useContext} from "react"
import { ThemeContext } from "../ThemeContext";

export default function ListItem(props){
   
    const {handleDelete, handleEdit} = useContext(ThemeContext)

    return (
        <div id={props.id}>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <img src={props.imgUrl} height="200px" />
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div> 
    )}


