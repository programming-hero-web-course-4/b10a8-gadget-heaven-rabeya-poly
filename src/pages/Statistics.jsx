import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Statistics = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState(data)
    const handleSort = sortBy =>{
       if(sortBy == 'price') {
    
        //sortBy price
        const sorted = [...data].sort((a, b) =>b.price - a.price)
        setProducts(sorted)   
    } else if (sortBy == 'rating'){
        //sortBy rating
        const sorted = [...data].sort((a, b) =>b.rating - a.rating)
        setProducts(sorted)  
       }
    }
    return (
        <>
        <div className='flex justify-between items-center my-12'>
           <div>
            <h1 className='text-xl font-thin'>Cart</h1>
           </div>
           <div className='space-x-4'>
           <button onClick={()=>handleSort('price')}  className='btn btn-warning'>Sort By Price</button>
            <button onClick={()=>handleSort('rating')} className='btn btn-warning'>Sort By Rating</button>
           </div>
        </div>
        <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {products.map(product => (<Card key={product.product_id} product={product}/>

   ) )}
        </div>
        </>
    );
};

export default Statistics;