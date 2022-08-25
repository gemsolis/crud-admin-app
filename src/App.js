import React from 'react';

import './App.css';

import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductModal from './components/UI/Modals/ProductModal';
import Footer from './components/Footer/Footer';



function App(props) {
  const {isAddOpen} = useSelector((store) => store.addModal);

  return (
  <>
  {isAddOpen === true && <ProductModal title="Add Product Information" modalButton="Add Product"/>}
  <Header />
  <Products />
  <Footer/>
  </>
  );
}


export default App;
