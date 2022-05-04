// IMPORT DEPENDENCIES
import React, {Component} from "react"

// CREATE THE COMPONENT 
class Display extends Component {
    render() {
        const {firstName, lastName, age, haircolor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {age}</h3>
                <h3>hair Color: {haircolor}</h3>
            </div>
        )
    }
}

// EXPORT THE COMPONENT WITH
export default Display;