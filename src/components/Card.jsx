import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_id,product_title,product_image,category,price,description,Specification,availability,rating} = product || {}
    console.log(product);
    return (
        
        <div className="flex relative">
        <Link to={`/statistics/${product_id}`} className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'>
        <figure className='overflow-hidden'>
          <img className='w-full h-60'
            src={product_image}
            alt="" />
        </figure>
        <div className='p-4'>
          <h2 className="text-xl">Product Name:{product_title}</h2>
          <p>Category:{category}</p>
          <p>Price:{price}</p>
          <p>Rating:{rating}</p>
          <button className='btn bg-purple-600'>View Details</button>
          
        </div>
        </Link>
      </div>
    );
};

export default Card;