// IMPORT DEPENDENCIES
import React, { Component } from 'react'


// CREATE THE COMPONENT 
// EXPORT THE COMPONENT WITH
export default class Form extends Component {
    render() {
        return (
            <fieldset>
                <legend>App.js</legend>
                <form action="">
                    <p>
                    User Name:
                    <input type="text" />
                    </p>
                    <p>
                    Password:
                    <input type="password" />
                    </p>
                    <button>Submit</button>
                </form>

            </fieldset>
        )
    }
}