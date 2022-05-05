// IMPORT DEPENDENCIES
import React, {Component} from "react"

// CREATE THE COMPONENT 
class Display extends Component {
    render() {
        // const {firstName, lastName, age, haircolor} = this.props;
        
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.props.age}</h3>
                <h3>hair Color: {this.props.haircolor}</h3>
            </div>
        )
    }
}

// EXPORT THE COMPONENT WITH
export default Display;