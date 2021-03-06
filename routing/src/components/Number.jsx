import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

const Number = () => {
  const {num} = useParams()
  
  return (
      <fieldset style={{textAlign: 'center'}}>
          <legend>Number or Word.jsx</legend>
          {/* ADD A Number */}
          {
          isNaN(num) ? 
          <h1>The Word is: {num}</h1>
          :  <h1>The Number is: {num}</h1>
          }
      </fieldset>
  )
}

export default Number
