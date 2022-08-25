import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <h5>Github Link: <p>
        <a href="https://github.com/gemsolis/crud-admin-app.git" target="_blank" >https://github.com/gemsolis/crud-admin-app.git</a>
          </p></h5>
        <h4>Coded by Gem Solis 🌼</h4>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom:0;
    color:#fff;
    background-color: #000;
    padding:20px 30px;
    margin-top: 20px;

    h5{
      margin-right: 40px;
    }

`

export default Footer
