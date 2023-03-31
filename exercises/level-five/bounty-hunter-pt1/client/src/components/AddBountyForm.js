import React, { useState } from "react"

export default function AddBountyForm(props){


    const initInputs = { firstName: "", bounty: ""}
    const [inputs, setInputs] = useState(initInputs)
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        props.addBounty(inputs)
        console.log(inputs)
        setInputs(initInputs)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="firstName" 
            value={inputs.firstName} 
            onChange={handleChange} 
            placeholder="Name" />
            <input 
            type="number" 
            name="bounty" 
            value={inputs.bounty} 
            onChange={handleChange} 
            placeholder="Bounty" />
            <button>Add Bounty</button>
        </form>
    )
}