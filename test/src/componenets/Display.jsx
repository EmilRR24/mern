// IMPORT DEPENDENCIES
import React, {Component} from "react"

// CREATE THE COMPONENT 
class Display extends Component {
    render() {
        return (
            <fieldset>
                <h1>Hello Dojo </h1>
                <h3>Things I need to do:</h3>
                <li>Learn React</li>
                <li>Climb Mt.Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </fieldset>
        )
    }
}

// EXPORT THE COMPONENT WITH
export default Display;