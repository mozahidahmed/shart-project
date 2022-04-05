import React from 'react';
import './HomeProduct.css'

const HomeProduct = ({product}) => {
    const {name,img,price,ratings,para}=product;
    return (
        <div className='home-cart'>
            <img src={img} alt=""></img>
            <h3>Name:{name}</h3>
           
            <h3>{para}</h3>
            <h3>Renting:{ratings}</h3>


        </div>
    );
};

export default HomeProduct;