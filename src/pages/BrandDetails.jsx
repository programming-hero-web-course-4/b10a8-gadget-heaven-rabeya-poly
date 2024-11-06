import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addCart } from '../utilities';
import { getAllCart } from '../utilities';
const BrandDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const singleData = data.find(product=>product.id === parseInt.id)
   setProduct(singleData)
    },[data,id])

    //handle add to cart btn click
    const handleAddCart =(product)=>{
    addCart(product)
    // getAllCart()
    }
    return (


         <div className='flex flex-col justify-center items-center'>
            <img className='w-60 '
            src={product.product_image}
            alt="" />
            <h2 className="text-xl">Product Name:{product.product_title}</h2>
          <p>Category:{product.category}</p>
          <p>Price:{product.price}</p>
          <p>Description:{product.description}</p>
          <p>Specification:{product.Specification}</p>
          <p>Availability:{product.availability}</p>
          <p>Rating:{product.rating}</p>
          <button onClick={()=>handleAddCart(product)} className='btn bg-purple-600'>Add To Cart</button>
           
        </div>
    );
};

export default BrandDetails;