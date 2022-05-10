import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

const Word = () => {
  const {word} = useParams()
    return (
        <fieldset style={{textAlign: 'center'}}>
            <legend>Word.jsx</legend>
            {/* ADD A WORD */}
            <h1>The word is: {word}</h1>
        </fieldset>
    )
  }


export default Word