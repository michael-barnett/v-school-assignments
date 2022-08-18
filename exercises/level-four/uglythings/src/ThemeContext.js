import React, { useState, createContext, useEffect } from "react"
import ListItem from "./components/ListItem"
const axios = require("axios")

const ThemeContext = createContext()


function ThemeContextProvider(props){

    const [uglyThings, setUglyThings] = useState([])
    const [dependencyCount, setDependencyCount] = useState(1)
    const [newInput, setNewInput] = useState({
        title: "",
        description: ""
    })

    function handleDelete(id){
        axios.delete(`https://api.vschool.io/mikebarnett/thing/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setUglyThings(uglyThings.filter(item => (item._id !== id)))
    }

    function editUglyThing(id, newInput){
        let update = {
            title: newInput.title,
            description: newInput.description}
        axios.put(`https://api.vschool.io/mikebarnett/thing/${id}`, update)
            .then(res => console.log(res.data))
        setUglyThings(prevUgly => prevUgly.map(item => (item._id === id ?
            {...item, title: newInput.title, description: newInput.description} : item)))
    }


    function postUglyThing(thing){
        axios.post("https://api.vschool.io/mikebarnett/thing", thing)
            .then(res => setUglyThings(prevUgly => ([
                ...prevUgly,
                res.data
            ])))
    }

    useEffect(() => {
        axios.get("https://api.vschool.io/mikebarnett/thing")
            .then(res => setUglyThings(res.data))
    }, [])

    return(
        <ThemeContext.Provider value={{
            uglyThings,
            handleDelete,
            dependencyCount,
            setDependencyCount,
            postUglyThing,
            editUglyThing,
            setNewInput,
            newInput
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}