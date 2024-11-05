import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const ProductCards = () => {
   const navigate = useNavigate()
    const data = useLoaderData()
    const {category} = useParams()
    const [products, setProducts] = useState([])
    useEffect(()=>{
      if(category){
        const filteredByCategory = [...data].filter(product=> product.category === category)
      setProducts(filteredByCategory) 
      }else{
        setProducts(data.slice(0, 6))
      }
    }, [category, data])
    console.log(data);
    
    return (
       
        <>
       
        <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
{products.map(product => (<Card key={product.product_id} product={product}/>

   ) )}
        </div>
        <button className='btn bg-purple-600 text-white hover:text-warning' onClick={()=>navigate('/statistics')}>All Product</button>
        </>
    );
};

export default ProductCards;