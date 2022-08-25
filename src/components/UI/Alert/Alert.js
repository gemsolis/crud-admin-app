import React from 'react'
import styled from 'styled-components'

const Alert = (props) => {
  return (
    <AlertNote>
        {props.note}
    </AlertNote>
  )
}

const AlertNote = styled.span`
    padding:20px;
    border-bottom: 3px solid #E87700;;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Quicksand', sans-serif;
`


export default Alert