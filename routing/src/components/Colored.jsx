import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

const Colored = () => {
  const {word} = useParams()
  const {color} = useParams()
  const {bgColor} = useParams()

    return (
        <fieldset style={{textAlign: 'center'}}>
            <legend>Colored.jsx</legend>
            {/* CHANGE COLOR AND ADD WORD */}
            <h1 style={{backgroundColor:bgColor,color:color}}>The word is: {word}</h1>
        </fieldset>
    )
  }


export default Colored