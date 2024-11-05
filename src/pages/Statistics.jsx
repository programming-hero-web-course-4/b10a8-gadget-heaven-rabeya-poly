import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Statistics = () => {
    const data = useLoaderData()
    return (
        <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
{data.map(product => (<Card key={product.product_id} product={product}/>

   ) )}
        </div>
    );
};

export default Statistics;