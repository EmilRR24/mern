// IMPORT DEPENDENCIES
import React, {useState} from 'react'

//JS BETTER SUITED FOR FUNCATIONAL OVER CLASS COMPONENETS
// CREATE THE COMPONENT
const Form_functional = (props) => {

    const [firstName, setFirstName] = useState("INITIAL STATE FIRST NAME")
    const [lastName, setLastName] = useState("INITIAL STATE LAST NAME")

    const submitHandler = (event) => {
        // STOPPING THE FORM FROM MAKING A POST REQUEST
        event.preventDefault()
        console.log("REGISTERING: ", firstName, lastName)
        
        // RESET THE STATES
        setFirstName("")
        setLastName("")
    }
    return (
        <fieldset>
            <legend>Form_functional.jsx</legend>
            <form onSubmit={submitHandler}>
            <p>
                First Name:
                <input onChange={(event)=> setFirstName(event.target.value)} type="text" name="firstName" />
            </p>
            <p>
                Last Name:
                <input onChange={(event)=> setLastName(event.target.value)} type="text" name="lastName" />
            </p>
            <button>Register</button>
            </form>
        </fieldset>
    )
}
// EXPORT THE COMPONENT
export default Form_functional