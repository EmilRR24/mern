// IMPORT DEPENDENCIES
import React, {Component} from "react"

// CREATE THE COMPONENT 
class Display extends Component {
    render() {
        const {firstName, lastName, age, clicked} = this.props;
        return (
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>Hello</h1>
                <h1>First Name: {firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <h1>Age: {age}</h1>
                <h1>Clicks: {clicked}</h1>
                <h1></h1>
            </fieldset>
        )
    }
}

// EXPORT THE COMPONENT WITH
export default Display;