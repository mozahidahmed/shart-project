import React from 'react';
import './Shirt.css'

const Shirt = (props) => {
    const {name,img,ratings,para}=props.product
    return (
        <div className='All-shart'>

          <div className='Protita-cart'>
              <img src={img} alt=""></img>
              <h2>Name:{name}</h2>
             <h3>{para}</h3>
              <h4>Ratings:{ratings}</h4>
          </div>

        </div>
    );
};

export default Shirt;