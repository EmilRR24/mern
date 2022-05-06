// IMPORT DEPENDENCIES
import React, {useState} from 'react'

//JS BETTER SUITED FOR FUNCATIONAL OVER CLASS COMPONENETS
// CREATE THE COMPONENT
const Form_functional = (props) => {
    // STATE KEEPING TRACK OF INPUT
    const [firstName, setFirstName] = useState("INITIAL STATE FIRST NAME")
    const [lastName, setLastName] = useState("INITIAL STATE LAST NAME")

    //STATE FOR KEEPING TRACK OF VALIDATIONS
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")

    const submitHandler = (event) => {
        // STOPPING THE FORM FROM MAKING A POST REQUEST
        event.preventDefault()
        console.log("REGISTERING: ", firstName, lastName)
        // RESET THE STATES
        setFirstName("")
        setLastName("")
    }

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        // FIRST NAME MUST BE required
        if(event.target.value.length < 1){
            setFirstNameError("FIRST NAME IS REQUIRED")
        }
        // FIRST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2) {
            setFirstNameError("FIRST NAME MUST BE LONGER THAN 2 CHARACTERS")
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        // LAST NAME MUST BE required
        if(event.target.value.length < 1){
            setLastNameError("LAST NAME IS REQUIRED")
        }
        // LAST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2) {
            setLastNameError("LAST NAME MUST BE LONGER THAN 2 CHARACTERS")
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setLastNameError("")
        }
    }

    return (
        <fieldset>
            <legend>Form_functional.jsx</legend>
            <form onSubmit={submitHandler}>
            <p>
                First Name:
                <input 
                    onChange={firstNameHandler} 
                    value={firstName}
                    type="text"
                    name="firstName" 
                />
                {
                    firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : null
                }
            </p>
            <p>
                Last Name:
                <input 
                    onChange={lastNameHandler} 
                    value={lastName}
                    type="text" 
                    name="lastName" 
                />
                                {
                    lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null
                }
            </p>
            <button>Register</button>
            </form>
        </fieldset>
    )
}
// EXPORT THE COMPONENT
export default Form_functional