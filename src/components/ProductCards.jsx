import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const ProductCards = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [products, setProducts] = useState([])
    useEffect(()=>{
      const filteredByCategory = [...data].filter(product=> product.category === category)
      setProducts(filteredByCategory) 
    }, [category, data])
    console.log(data);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
   products.map(product => <Card key={product.product_id} product={product}/>) 
}
        </div>
    );
};

export default ProductCards;