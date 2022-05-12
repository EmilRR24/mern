import React, {useState} from 'react'
import axios from 'axios'
import { Outlet, useNavigate } from 'react-router'

const Search = () => {
    const [category, setCategory] = useState('people');
    const [index, setIndex] = useState();
    //CALL USE NAVIGATE FUNCTION
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        // REDIRECT TO ANOTHER VIEW ON SUBMIT
        navigate(`/${category}/${index}`)
    }

    return (
        <div >
            <form action="" onSubmit={handleSubmit} style={{display: 'flex',justifyContent: 'center'}}>
                <p>Search For:</p>
                <select name="category" id="" onChange={(event) => setCategory(event.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                </select>
                <p>ID: </p>
                <input type="numbers" onChange={(event) => setIndex(event.target.value)}/>
                <button>Search</button>
            </form>
            <Outlet />
        </div>
    )
}

export default Search