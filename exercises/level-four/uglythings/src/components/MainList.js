import React, {useContext} from "react"
import { ThemeContext } from "../ThemeContext";
import ListItem from "./ListItem";



export default function MainList(){

    const {uglyThings, handleDelete, handleEdit} = useContext(ThemeContext)

    const listElement = uglyThings.map(item => 
        <ListItem 
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            id={item._id}
            key={item._id} />
    )

    return (
        <div>
            {listElement}
        </div>
    )
}