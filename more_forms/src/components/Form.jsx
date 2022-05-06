import React, {useState} from 'react'

const Form = (props) => {

    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");

    return (
        <div>
            {/* <legend>Form.jsx</legend> */}
                <p>First Name:
                    <input onChange={(e)=> setfirstName(e.target.value)} type="text" name="firstName" id="" />
                </p>
                <p>Last Name:
                    <input onChange={(e)=> setlastName(e.target.value)} type="text" name="lastName" id=""/>
                </p>
                <p>Email:
                    <input onChange={(e)=> setEmail(e.target.value)} type="text" name="email" id=""/>
                </p>
                <p>Password:
                    <input onChange={(e)=> setPassword(e.target.value)} type="text" name="password" id=""/>
                </p>
                <p>Confirm Password:
                    <input onChange={(e)=> setConfirm(e.target.value)} type="text" name="confirm" id=""/>
                </p>
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
        </div>
    )
}

export default Form