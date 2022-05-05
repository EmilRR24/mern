// IMPORT DEPENDENCIES
import React from 'react'

//JS BETTER SUITED FOR FUNCATIONAL OVER CLASS COMPONENETS
// CREATE THE COMPONENT
const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {props.age}</h3>
            <h3>hair Color: {props.haircolor}</h3>
        </div>
    )
}
// EXPORT THE COMPONENT
export default PersonCard