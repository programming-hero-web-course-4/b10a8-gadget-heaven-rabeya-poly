import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';

const Home = () => {
    return (
        <div>
               {/* Banner */}
               <Banner />
                {/* HEADING */}
                <Heading title='Explore Cutting-Edge Gadgets' subtitle='This is a subtitle'/>
                {/* Categories section */}
            {/* Dynamic Nested Component */}
            
        </div>
    );
};

export default Home;