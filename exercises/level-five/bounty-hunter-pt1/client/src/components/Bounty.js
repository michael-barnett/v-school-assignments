import React from "react";

export default function Bounty(props){
    console.log(props)
return (
    <div>
        <h1>First Name: {props.firstName} /  Last Name: {props.lastName}</h1>
        <p>Price: {props.bounty}</p>
        <button onClick={() => props.deleteBounty(props._id)}>Delete</button>
    </div>
)
}