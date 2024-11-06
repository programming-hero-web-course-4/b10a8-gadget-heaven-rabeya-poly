import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addCart, getAllCart } from '../utilities';

const BrandDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [product,setProduct] = useState({})
    
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(()=>{
        const singleData = data.find(product=>product.id == parseInt.id)
   setProduct(singleData)
   const cart = getAllCart()
   const isExist = cart.find(item =>item.id == product.id)
   if(isExist){
    setIsFavorite(true) 
   }   
 },[data,id])


    //handle add to cart btn click
    const handleAddCart =(product)=>{
    addCart(product)
    setIsFavorite(true) 
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
         
          {/* add cart button */}
         
          <button
           disabled = {isFavorite}
          onClick={()=>handleAddCart(product)} className='btn bg-purple-600'>Add To Cart</button>
           
        </div>
    );
};

export default BrandDetails;