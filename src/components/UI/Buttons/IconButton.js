import React from 'react'
import styled from 'styled-components'



const IconButton = (props) => {
  return (
    <Button onClick={props.onClick}><img src={props.icon} alt={props.alt}/></Button>
  )
}

const Button = styled.button`
    box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.20);
    -webkit-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.20);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;  
    transition:0.3s all ease;
    background-color: #eee;
    border-radius: 5px;
    margin: 0 5px;

    img{
        padding:5px;
        width: 35px;


    }

    :hover{
        background-color: #333;
        transform: scale(1.2)
    }


`


export default IconButton