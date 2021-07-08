import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProductDetails from '../components/productDetails/ProductDetails';
import SeeMoreProduct from '../components/seeMoreProduct/SeeMoreProduct';

const Home = () => {
    return (
        <>
          <Navbar /> 
          <ProductDetails />
          <SeeMoreProduct /> 
        </>
    );
};

export default Home;