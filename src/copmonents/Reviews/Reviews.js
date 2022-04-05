import React from 'react';
import useProducts from '../../hooks/useProducts';
import Shirt from '../Shirt/Shirt';
import './Reviews.css'


const Reviews = () => {

    const [products,setProduct]=useProducts()
    
    return (
        <div className='gridId'>
            {
              products.map(product=><Shirt product={product}></Shirt>) 
            }
          
            
        </div>
        
    );
};

export default Reviews;