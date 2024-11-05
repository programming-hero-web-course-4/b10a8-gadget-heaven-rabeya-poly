import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
const Dashboard = () => {
    const data = useLoaderData()
    
    return (
        <>
        <div className='text-center bg-purple-600 text-white p-12 space-y-4'>
        <h1 className=' text-3xl font-bold '>DashBoard</h1>
        <p className=' text-xl'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button className='btn btn-warning space-x-10'>Cart</button>
        <button className='btn btn-warning'>WishList</button>
        </div>
             <div className='flex justify-between items-center my-12'>
           <div>
            <h1 className='text-xl font-thin'>Cart</h1>
           </div>
           <div className='space-x-4'>
           
            <button className='btn btn-warning'>Purchase</button>
           
           </div>
        </div>
        <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {data.map(product => (<Card key={product.product_id} product={product}/>

   ) )}
        </div>
        </>
    );
};

export default Dashboard;