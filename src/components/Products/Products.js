import React, {useState, useEffect} from 'react'

import {Container, Search, ProductListHeader, SortButton, ProductTable, ActionButtons,ListHeader, ProductItem, NoProduct, ProductCard, ProductName, ProductDescription, ProductInfo, ProductQuantity, ProductPrice, Overlay, Modal, ModalHeader,ModalForm, InputText, InputNumber,SubmitButton} from './products-styled'

//FIREBASE
import {db} from '../../firebase-config'
import { doc, query, collection, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'

//REDUX
import { useDispatch, useSelector} from 'react-redux'
import { openEditModal, closeEditModal } from '../../features/toggleEditModalSlice'
import { alphaValid, notAlphaValid, alphaNumValid, notAlphaNumValid } from '../../features/validationSlice'


//UI
import ValidAlert from '../UI/Alert/ValidAlert'
import PrimaryButton from '../UI/Buttons/PrimaryButton'
import IconButton from '../UI/Buttons/IconButton'
import Alert from '../UI/Alert/Alert'

//ICONS 
import closeIcon from '../../assets/close-icon.png'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'
import ascendIcon from '../../assets/ascend-icon.png'
import descendIcon from '../../assets/descend-icon.png'



const Products = () => {
    const dispatch = useDispatch()
    const {isAlphaValid, isAlphaNumValid } = useSelector((store) => store.validAlert);
    const {isEditOpen} = useSelector((store) => store.editModal);

    const [productsList, setProductsList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [order, setOrder] = useState()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [updateId, setUpdateId] = useState('')

    //SEARCH INPUT HANDLER
    const searchInputChange = (e) => {
          setSearchTerm(e.target.value);
    };


    //FETCHING DATA FROM FIRESTORAGE
    useEffect(() => {
      const q = query(collection(db, "products"))
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let productsList = []
        QuerySnapshot.forEach((doc) => {
          productsList.push({...doc.data(), id: doc.id})
        })
        setProductsList(productsList)
      })
      return () => unsubscribe()
    },[])



    //SORT DATA ASCENDING
    function handleSortAscending(){
      const sortedData = [...productsList].sort((a, b) =>{
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      });
      setProductsList(sortedData)
    }

    //SORT DATA DESCENDING
    function handleSortDescending(){
      const sortedData = [...productsList].sort((a, b) => {
        return  a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      });
      setProductsList(sortedData)
    }

    const orderHandler = () => {
      setOrder((prevState) => !prevState);
    }


    //DELETE PRODUCT FROM FIRESTORAGE
    const deleteProductHandler =  async(id) => {
    console.log(id)
          const confirm = window.confirm("Are you sure you want to delete this product?")
          if (confirm) {
            await deleteDoc(doc(db, "products", id));
    }

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

    const handleUpdate = async (e) => {
      const productDocRef = doc(db, "products", (updateId))
      e.preventDefault()
      if(isAlphaValid === true){
          return dispatch(notAlphaValid())
      }else if(isAlphaNumValid === true){
          return dispatch(notAlphaNumValid())
      }else

      try{
        await updateDoc(productDocRef, {
          name: name,
          description: description,
          quantity:quantity,
          price:price,
        })
        dispatch(closeEditModal())
      } catch (err) {
        alert(err)
      }
      alert("Product Updated Successfully!") 
    }


    const productTableHeader = 
    
    <ListHeader> 
    <tr>
    <th className='row-name'>Product Name</th>
    <th>Description</th>
    <th>Quantity</th>
    <th>Price [PHP]</th>
    <th>Actions</th>
    </tr>

    </ListHeader>


    const productListItem = productsList.filter((product) => {
      if(searchTerm === "") {
        return product;
      }else if (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()))   {
        return product;
      }
    }).map((product) => 
    

    <ProductItem key={product.id}>

    <tr>
    <td className='row-name'><h3>{product.name}</h3></td>
    <td>{product.description}</td>
    <td>{product.quantity}</td>
    <td>{product.price}</td>
    <ActionButtons>
    <IconButton icon={editIcon} style={{backgroundColor:"red"}} onClick={()=> {
    dispatch(openEditModal())
    setUpdateId(product.id)
    setName(product.name)
    setDescription(product.description)
    setQuantity(product.quantity)
    setPrice(product.price)
    }}/>

    <IconButton icon={deleteIcon} onClick={(() => deleteProductHandler(product.id))}/>
    </ActionButtons>
    </tr>

    </ProductItem>
    )


    const productListMobile = productsList.filter((product) => {
      if(searchTerm === "") {
        return product;
      }else if (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()))   {
        return product;
      }
    }).map((product) => 
    <ProductCard key={product.id}>

    <ProductName>
      {product.name}
    </ProductName>
    <ProductDescription>
      {product.description}
    </ProductDescription>
    <ProductInfo>
      <ProductQuantity>
        <span>Quantity</span>
        <p>{product.quantity}</p>
      </ProductQuantity>
      <ProductPrice>
        <span>Price[PHP]</span>
        <p>{product.price}</p>
      </ProductPrice>
    </ProductInfo>
    <ActionButtons>
    <IconButton icon={editIcon} onClick={()=> {
    dispatch(openEditModal())
    setUpdateId(product.id)
    setName(product.name)
    setDescription(product.description)
    setQuantity(product.quantity)
    setPrice(product.price)
    }}/>

    <IconButton icon={deleteIcon} onClick={(() => deleteProductHandler(product.id))}/>
    </ActionButtons>
  
    </ProductCard>

    
    
    )


  return (
 
    <Container>

      
      <Search>
      <input type="text" placeholder='Search product...' onChange={searchInputChange} />
      </Search>

      
      <ProductListHeader>
      <h3>Product List</h3>
      {/* CONDITIONAL RENDERING ASCEND TO DESCEND SORTING */}
      <h5>SORT BY: {order === true ? <span>Descending</span> : <span>Ascending</span>}</h5>
      <SortButton onClick={orderHandler}>
        {order === true ? <IconButton icon={ascendIcon} name="Ascending" onClick={handleSortAscending}/> : <IconButton icon={descendIcon} name="Descending" onClick={handleSortDescending}/> }
      </SortButton>
      </ProductListHeader>

        {/* PRODUCT TABLE LIST */}
        <ProductTable>

        {productTableHeader}
        {productListItem}

        </ProductTable>

        {productListMobile}
        {/* CONDITIONAL RENDERING WHEN NO PRODUCT ADDED YET */}

        {productsList.length === 0 && 
        <NoProduct>
        <Alert note="No Product Added Yet"/>
        </NoProduct>
        }


        {isEditOpen === true &&  
        <Overlay>
        <Modal>

            <ModalHeader >
                    <h2>Update Product Information</h2>
                    <IconButton icon={closeIcon} onClick={()=> dispatch(closeEditModal())} />
            </ModalHeader>

                <ModalForm onSubmit={handleUpdate}>
                    <InputText>

                        <label>Product Name</label>
                        <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=> {setName(e.target.value)} }
                        onBlur={validationName}
                        />
                        {isAlphaValid === true && <ValidAlert message="Name must only contain alphabetic characters."/>}
                        

                        <label>Product Description</label>
                        <textarea
                        name="description"
                        value={description}
                        onChange={(e)=> {setDescription(e.target.value)}}
                        onBlur={validationDescription}
                        />
                        {isAlphaNumValid === true && <ValidAlert message="Name must only contain alphanumeric characters."/>}
                        

                    </InputText>

                    <InputNumber>

                        <label>Quantity</label>
                        <input
                        type="number" 
                        placeholder='1'
                        value={quantity}
                        onChange={(e)=> {setQuantity(e.target.value)}}/>
                        

                        <label>PHP</label>
                        <input type="number"
                        placeholder="0.00"
                        step=".01"
                        name="price"
                        value={price}
                        onChange={(e)=> {setPrice(e.target.value)}}/>
        
                      

                    </InputNumber>
  
                    <SubmitButton>
                    <PrimaryButton type="submit" name="Update Product" />
                    </SubmitButton>

                    </ModalForm>
           </Modal>
        </Overlay>}
       

    </Container>

  )
}




export default Products