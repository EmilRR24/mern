import React, {useState} from 'react'

const Form = (props) => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");

    //STATE FOR KEEPING TRACK OF VALIDATIONS
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmError, setConfirmError] = useState("")


    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        if(event.target.value.length > 0){
            // FIRST NAME MUST BE LONGER THAN 2 CHARS
            if(event.target.value.length < 2) {
                setFirstNameError("FIRST NAME MUST BE LONGER THAN 2 CHARACTERS")
            }
            else {
                setFirstNameError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        if(event.target.value.length > 0){
            // LAST NAME MUST BE LONGER THAN 2 CHARS
            if(event.target.value.length < 2) {
                setLastNameError("LAST NAME MUST BE LONGER THAN 2 CHARACTERS")
            }
            else {
                setLastNameError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setLastNameError("")
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
        if(event.target.value.length > 0){
            // EMAIL MUST BE LONGER THAN 2 CHARS
            if(event.target.value.length < 2) {
                setEmailError("EMAIL MUST BE LONGER THAN 2 CHARACTERS")
            }
            else {
                setEmailError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setEmailError("")
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if(event.target.value.length > 0){
            // PASSWORD MUST BE LONGER THAN 8 CHARS
            if(event.target.value.length < 8) {
                setPasswordError("PASSWORD MUST BE LONGER THAN 8 CHARACTERS")
            }
            else {
                setPasswordError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setPasswordError("")
        }
    }
    const confirmHandler = (event) => {
        setConfirm(event.target.value)
        // PASSWORD MUST MATCH
        if(event.target.value !== password) {
            setConfirmError("PASSWORD MUST MATCH")
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setConfirmError("")
        }
    }


    return (
        <div>
            {/* <legend>Form.jsx</legend> */}
                <p>First Name:
                    <input onChange={firstNameHandler} type="text" name="firstName" id="" />
                    {
                    firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : null
                    }
                </p>
                <p>Last Name:
                    <input onChange={lastNameHandler} type="text" name="lastName" id=""/>
                    {
                    lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null
                    }
                </p>
                <p>Email:
                    <input onChange={emailHandler} type="text" name="email" id=""/>
                    {
                    emailError ? <p style={{color:'red'}}>{emailError}</p> : null
                    }
                </p>
                <p>Password:
                    <input onChange={passwordHandler} type="password" name="password" id=""/>
                    {
                    passwordError ? <p style={{color:'red'}}>{passwordError}</p> : null
                    }
                </p>
                <p>Confirm Password:
                    <input onChange={confirmHandler} type="password" name="confirm" id=""/>
                    {
                    confirmError ? <p style={{color:'red'}}>{confirmError}</p> : null
                    }
                </p>
        </div>
    )
}

export default Form