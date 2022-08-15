import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
const axios = require("axios")

export default function HeaderForm(){


    const {setDependencyCount} = useContext(ThemeContext)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: "",
        })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        setDependencyCount(prevDependencyCount => prevDependencyCount + 1)
        axios.post("https://api.vschool.io/mikebarnett/thing", formData);
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" onChange={handleChange} name="title" value={formData.title} required/>
                <input type="text" placeholder="img URL" onChange={handleChange} name="imgUrl" value={formData.imgUrl} required />
                <input type="text" placeholder="Description (Why is this ugly?" onChange={handleChange} name="description" value={formData.description} required/>
                <button>Submit</button>
            </form>
        </div>
    )
}