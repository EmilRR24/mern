import React from 'react'

const Display = (props) => {

    const{allColors} = props

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                allColors.map((color, index) => {
                    return (
                        <div key={index} style={{backgroundColor:"{{color}}",width:"50px", height:"50px"}}>    
                            {color}
                        </div>
                    )
                } )
            }
        </fieldset>
    )
}

export default Display