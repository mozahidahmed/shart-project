import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './Home.css';
import HomeProduct from '../HomeProduct/HomeProduct';

const Home = () => {
const [products,setProducts]=useProducts()


    return (
       <div>
 <div className='allhome'>
 
 <div className='home-Photo'>
     <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec81fbd781fe4aa3a8cead230019c192_9366/AEROREADY_Designed_2_Move_Feelready_Sport_Tee_Burgundy_H30268_21_model.jpg"></img>
 </div>
 <div className='home-text'>
     <div>
         <h1 className='title'> Mozahid T_Shirt Shop </h1>

     </div>
     <div> <h3>Hight Quality</h3> </div>
     <div>  <p>Get Results for Mph Course In Usa. Find Quick Results from Multiple Sources. Sylhet - Search for Relevant Info & Results. Simple in use. Discover us now! Multiple sources combined. All the Answers. Easy Acces To Information. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast.Get Results for Mph Course In Usa. Find Quick Results from Multiple Sources. Sylhet - Search for Relevant Info & Results. Simple in use. Discover us now! Multiple sources combined. All the Answers. Easy Acces To Information. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast.Get Results for Mph Course In Usa. Find Quick Results from Multiple Sources. Sylhet - Search for Relevant Info & Results. Simple in use. Discover us now! Multiple sources combined. All the Answers. Easy Acces To Information. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast.</p>
     <br/>
     <button className='Home-para-button'>Shop Now</button>
     </div>
    

 </div>
 
 
 
 
 </div>




 <div className='home-revew-page'>
   
      
  {
         products.slice(0,3).map(product=><HomeProduct product= {product}></HomeProduct>)
     }


 </div>
 <Link to='/reviews'>
<button>See All Revews</button>
 </Link>

       </div>

    );
};

export default Home;