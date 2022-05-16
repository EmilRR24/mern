import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    //DESTRUCTURE
    const {refresh} = props

    // HANDLER FUNCTIONS
    const submitHandler = event => {
        event.preventDefault()
        // CREATE AN OBJECT WITH THE PRODUCT INFO
        const productObj = {
            title,
            price,
            description
        }
        // MAKE POST REQUEST TO EXPRESS WITH productObj
        axios.post("http://localhost:8000/api/products/new", productObj)
            .then(res => {
                console.log(res)
                refresh();
                setTitle("");
                setPrice();
                setDescription("");
            })
            .catch(err => console.log(err))
    }


    return (
        <fieldset>
            {/* <legend>FormComponent.jsx</legend> */}
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    Prices:
                    <input type="num" name="price" onChange={(e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
                </p>
                <button>Create</button>
            </form>
        </fieldset>
    )
}

export default Form