import React from 'react'
import styled from 'styled-components'

const PrimaryButton = (props) => {
  return (
    <Button type="submit" onClick={props.onClick} onSubmit={props.onSubmit}>{props.name}</Button>
  )
}

const Button = styled.button`
    background-color: #e87700;
    padding:10px 15px;
    transition: 0.3s all ease;
    margin-left:10px;

    @media (max-width:414px){
      font-size:0.7rem;
      padding:5px 10px;
  
    }

    :hover{
      color: #e87700;
      background-color: #000;
      border-radius: 10px;

    }

`

export default PrimaryButton