import React, {useState} from 'react'

const Form = (props) => {

    const [color,setColor] = useState("")


    const submitHandler = (event) => {
        event.preventDefault()
        props.addColor(color)   
        setColor("")      
    }

    const changeHandler = (event) => {
        setColor(event.target.value)
    }

    return (
        <fieldset style={{textAlign: 'center'}}>
            <form onSubmit={submitHandler}>
                <p>
                    Color: 
                    <input onChange={changeHandler} type="text" name="color" value={color}/>
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form