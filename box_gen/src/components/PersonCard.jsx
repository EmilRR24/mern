import React from 'react'

const PersonCard = (props) => {
    // DESTRUCTURE THE PROPS INFORMATION
    console.log(props.user)
    const {firstName, lastName, age,} = props.user



    return (
        <fieldset>
            <legend>PersonCard.jsx</legend>
            <h1>{lastName}, {firstName}</h1>
            <h3>Age: {age}</h3>
        </fieldset>
    )
}

export default PersonCard