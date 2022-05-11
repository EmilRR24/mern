import React, {useState} from 'react'
import axios from 'axios'
import handleSubmit from './Display'

const Search = () => {
    const [apiState, setApiState] = useState()
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const fetchPeople = () => {
        axios.get("https://swapi.dev/api/people")
        .then(response => {
            console.log("SUCCESS", response.data);
            setApiState(response.data.results)
        }, [])
        .catch(err => {console.log("ERROR", err)})
    }

    return (
        <div>
            <form action="" onSubmit={(event) => {handleSubmit(event)}}>
                <p>Search For:</p>
                <select name="category" id="">
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
                <p>ID: </p>
                <input type="number" value="index"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search