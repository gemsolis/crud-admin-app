import React, {useState} from 'react'
import styled from 'styled-components'

import { collection, addDoc} from 'firebase/firestore'
import { db } from '../../../firebase-config'

import { useDispatch, useSelector } from 'react-redux'
import { closeAddModal } from '../../../features/toggleAddModalSlice'
import { alphaValid, notAlphaValid, alphaNumValid, notAlphaNumValid } from '../../../features/validationSlice'


import ValidAlert from '../Alert/ValidAlert'
import PrimaryButton from '../Buttons/PrimaryButton'
import IconButton from '../Buttons/IconButton'

import closeIcon from '../../../assets/close-icon.png'


const ProductModal = (props) => {
    const {isAlphaValid, isAlphaNumValid } = useSelector((store) => store.validAlert);
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name:"",
        description:"",
        quantity: 1,
        price: 1,
    })


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData ({...data, [name]: value});
    }


    const validationName = (e) => {
        if(e.target.value.match("[0-9]")){
            return dispatch(notAlphaValid())
        }else {
            return dispatch(alphaValid())
        }
    }

    const validationDescription = (e) => {
        var specialChar = /[`%^()_+\-=[\]{};':"\\|<>~]/ 
        if(e.target.value.match(specialChar)){
            return dispatch(notAlphaNumValid())
        }else {
            return dispatch(alphaNumValid())
        }
    }


    const addProductHandler =  async(e) => {
        e.preventDefault();
        if(isAlphaValid === true){
            return dispatch(notAlphaValid())
        }else if(isAlphaNumValid === true){
            return dispatch(notAlphaNumValid())
        }else{
            await addDoc(collection(db,"products",), {
                name: data.name,
                description: data.description,
                quantity: data.quantity,
                price:data.price,
            });
            dispatch(closeAddModal());
            alert("Product Added Successfully")
        }
    }



  return (
    <>
   
        <Overlay>
        <Modal>

            <ModalHeader >
                    <h2>{props.title}</h2>
                    <IconButton icon={closeIcon} onClick={()=> dispatch(closeAddModal())} />
            </ModalHeader>

                <ModalForm onSubmit={addProductHandler}>
                    <InputText>

                        <label>Product Name</label>
                        <input
                        type="text"
                        name="name"
                        value={data.name}

                        onChange={handleChange}
                        onBlur={validationName}
                        />
                        {isAlphaValid === true && <ValidAlert message="Name must only contain alphabetic characters."/>}

                        <label>Product Description</label>
                        <textarea
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        onBlur={validationDescription}
                        />
                        {isAlphaNumValid === true && <ValidAlert message="Name must only contain alphanumeric characters."/>}

                    </InputText>

                    <InputNumber>

                        <label>Quantity</label>
                        <input
                        type="number" 
                        placeholder='1'
                        min="1"
                        name="quantity"
                        value={data.quantity}
                        onChange={handleChange}/>
                        

                        <label>PHP</label>
                        <input type="number"
                        placeholder="0.00"
                        step=".01"
                        min="1"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        />
                      

                    </InputNumber>
  
                    <SubmitButton>
                    <PrimaryButton type="submit" name={props.modalButton} />
                    </SubmitButton>

                    </ModalForm>
        </Modal>
    </Overlay>
    
    </>
   
   
  )
}

const Overlay = styled.div`
    width: 100vw;
    height:100vh;
    position: fixed;
    top:0;
    right:0;
    left:0;
    z-index: 100;
    background-color: rgba(0,0,0,0.50);
`
const Modal = styled.div`
    background-color: #fff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin:3% 10%;
    padding:20px;

    @media (max-width:768px){
        margin:10% 5%;
        padding:30px 20px;
    }


`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.40);
    padding-bottom: 10px;
    color:#E87700;
`

const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    margin:10px 0;

`

const InputText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    label{
        font-size:1.2rem;
        font-weight: 700;
        margin:20px 0 10px 0;
    }

    input{
        background-color: #eee;
        font-size:1.2rem;
        height: 40px;

    }

    textarea{
        width: 100%;
        height:100px;
        resize:none;
        background-color: #eee;
    }
`

const InputNumber = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin:30px 0;



    @media(max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin:20px ;
    }

    label{
        background-color: #333;
        color: #fff;
        padding:10px 15px;
        margin-left:30px;


    @media(max-width: 768px){
        font-size: 0.8rem;
        margin:0;
    }
    }

    input{
        background-color: #eee;
        width: 100px;
        height:35px;


        @media(max-width: 768px){
        width: 50px;
        margin-right:10px;
        margin-bottom:10px;
    }
    }

`

const SubmitButton = styled.div`
    display: flex;
    justify-content: flex-end;

    button{
        color:#000;
    }

    @media(max-width: 768px){
        justify-content: center;
    }

`

export default ProductModal