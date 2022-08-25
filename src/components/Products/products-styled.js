import styled from "styled-components"


export const Container = styled.div`
  margin:15vh 5% 10vh 5%;

  @media(max-width:768px){
    margin:15vh 5% 10vh 5%;
  }
`

export const Search = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  input{
    width: 100%;
    padding:15px 10px;
    border-radius: 5px 0 0 5px;
    font-size: 1.2rem;
  }
`

export const ProductListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid #333;
    border-radius: 0 5px 5px 0;
    text-transform: uppercase;

    h3{
      flex-grow: 1;
    }

    h5{
        font-size:0.7rem;
    }


`

export const SortButton = styled.div`
    padding:15px;

`



export const ProductTable = styled.table`
    width: 100%;
    margin: 20px 0;
    font-family: 'Quicksand', sans-serif;
    box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);
    -webkit-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);

    .row-name{
      width:350px;
    }

`


export const ActionButtons = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ListHeader = styled.thead`
  background-color: rgba(232, 119, 0,0.80);
  border-radius: 5px;

  th{
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
  }

  @media (max-width:800px) {
        display: none;
    }

`

export const ProductItem = styled.tbody`
    box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);
    -webkit-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);

    @media (max-width:768px) {
        display: none;
    }
    
    :nth-child(odd){
      background-color: rgba(255, 255, 255, 0.70);

      color: #333;
    }    

    :nth-child(even){
      background-color: rgba(99, 99, 99,0.70);
      color: #fff;
    }        
    td{

      text-align: center;
      padding: 20px;

      h3{
        font-weight: 700;
      }

    }
`

export const NoProduct = styled.div`
    display: flex;
    justify-content: center;
    width: auto;

`

export const ProductCard = styled.div`
   box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);
    -webkit-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: 2px 4px 9px 0px rgba(0,0,0,0.32);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(250,250,250,0.70);
    border-radius: 5px;
    margin: 20px 10px;
    padding:20px 10px;
    border-top: 3px solid  #E87700 ;

    @media (min-width:769px){
      display: none;
    }


`
export const ProductName = styled.h2`
    font-size: 2rem;
    margin:10px 0;
`
export const ProductDescription = styled.p`
    text-align: justify;
    margin:10px 20px;
`
export const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const ProductQuantity = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin:30px 0;
    color: #fff;
    font-weight: 700;

    span{
      background-color: #333;
      padding:15px;
      border-radius: 5px 5px 0 0;
    }

    p{
      background-color: #E87700;
      padding:20px;
      border-radius: 0 0 5px 5px;
    }

`
export const ProductPrice = styled(ProductQuantity)``


export const Overlay = styled.div`
    width: 100vw;
    height:100vh;
    position: fixed;
    top:0;
    right:0;
    left:0;
    z-index: 100;
    background-color: rgba(0,0,0,0.50);

`
export const Modal = styled.div`
    background-color: #fff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin:10% 10%;
    padding:20px;

    @media (max-width:768px){
        margin:20% 5%;
        padding:30px 20px;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.40);
    padding-bottom: 10px;
    color:#E87700;
`

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    margin:10px 0;

`

export const InputText = styled.div`
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

export const InputNumber = styled.div`
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
        color: #e87700;
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

export const SubmitButton = styled.div`
    display: flex;
    justify-content: flex-end;

    @media(max-width: 768px){
        justify-content: center;
    }

    button{
        color:#000;
    }

`
