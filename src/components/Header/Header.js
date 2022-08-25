import React from 'react'
import styled from 'styled-components'

import PrimaryButton from '../UI/Buttons/PrimaryButton'

import { useDispatch } from 'react-redux'
import { openAddModal } from '../../features/toggleAddModalSlice'



const Header = ({onOpenModal}) => {
  const dispatch = useDispatch();

  return (
    <div>
    <Container>

    <h1>CRUD PRODUCT ADMIN</h1>

    <PrimaryButton name="Add Product" onClick={()=> dispatch(openAddModal())} />


    </Container>

    </div>
  )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    padding:20px 40px;
    background-color: rgba(51, 51, 51,0.80);

    h1{
        color:#fff;
        flex-grow: 1;


        @media (max-width:768px){
          font-size: 1.3rem;
        }

        @media (max-width:320px){
          font-size: 0.7rem;
        }
    }
`



export default Header