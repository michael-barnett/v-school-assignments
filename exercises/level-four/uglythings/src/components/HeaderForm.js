import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
const axios = require("axios")

export default function HeaderForm(){


    const {postUglyThing} = useContext(ThemeContext)
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
        postUglyThing(formData);
        console.log("working")
        setFormData({
            title: "",
            description: "",
            imgUrl: "",
            })
    }
    
    return(
        <div className="header--container">
            <form onSubmit={handleSubmit}>
                <input className="header--input" type="text" placeholder="Title" onChange={handleChange} name="title" value={formData.title} required/>
                <input className="header--input" type="text" placeholder="Img URL" onChange={handleChange} name="imgUrl" value={formData.imgUrl} required />
                <input className="header--input" type="text" placeholder="Description" onChange={handleChange} name="description" value={formData.description} required/>
                <div className="break"></div>
                <button className="header--button">Submit</button>
            </form>
        </div>
    )
}