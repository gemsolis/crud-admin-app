import React from 'react'
import styled from 'styled-components'

const validAlert = (props) => {
  return (
    <AlertValidation>
       <span>{props.message}</span>
    </AlertValidation>
  )
}

const AlertValidation = styled.div`
    background-color: #ff8e8e;
    border: 3px solid #ffbcbc;
    font-family: 'Quicksand', sans-serif;
    color: #333;
    padding:5px;
    margin: 10px 0;
    transition: 0.3s all ease;
`

export default validAlert