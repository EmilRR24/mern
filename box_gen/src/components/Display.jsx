import React from 'react'

const Display = (props) => {

    const{allColors} = props

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {/* <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', height:'auto', width:'auto'}}> */}
            {   
                allColors.map((color, index) => {
                    return (
                        <div key={index}>    
                        <p style={{backgroundColor: color,width:"150px", height:"150px"}}></p> 
                        </div>
                    )
                } )
            }
            {/* </div> */}
        </div>
    )
}

export default Display