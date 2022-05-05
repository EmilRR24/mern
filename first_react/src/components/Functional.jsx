// IMPORT DEPENDENCIES
import React from 'react'

//JS BETTER SUITED FOR FUNCATIONAL OVER CLASS COMPONENETS
// CREATE THE COMPONENT
const Functional = (props) => {

    const {firstName, lastName, age} = props

    return (
        <fieldset>
            <legend>Functional.jsx</legend>
            <h1>First Name: {firstName}</h1>
            <h1>Last Name: {lastName}</h1>
            <h1>Age: {age}</h1>
        </fieldset>
    )
}
// EXPORT THE COMPONENT
export default Functional