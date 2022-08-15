import React, { useState, createContext, useEffect } from "react"
const axios = require("axios")

const ThemeContext = createContext()


function ThemeContextProvider(props){

    const [uglyThings, setUglyThings] = useState([])
    const [dependencyCount, setDependencyCount] = useState(1)
    const [editMode, setEditMode] = useState(false)
    

    function handleDelete(e){
        setDependencyCount(prevDependencyCount => prevDependencyCount + 1)
        axios.delete(`https://api.vschool.io/mikebarnett/thing/${e.target.parentElement.id}`);
    }

    function handleEdit(e){
        setEditMode(!editMode);
        console.log(editMode)
    }

    useEffect(() => {
        axios.get("https://api.vschool.io/mikebarnett/thing")
            .then(res => setUglyThings(res.data))
    }, [dependencyCount])

    return(
        <ThemeContext.Provider value={{
            uglyThings,
            handleDelete,
            handleEdit,
            dependencyCount,
            setDependencyCount
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}