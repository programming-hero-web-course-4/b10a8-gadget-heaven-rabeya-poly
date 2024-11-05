import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
               {/* Banner */}
               <Banner />
                {/* HEADING */}
                <Heading title='Explore Cutting-Edge Gadgets'/>
                {/* Categories section */}
               <Categories categories={categories} />
                
            {/* Dynamic Nested Component */}
            <Outlet />
        </div>
    );
};

export default Home;