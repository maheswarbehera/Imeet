import React from 'react';
import Hero from './Hero';
import College from './College';
import Trending from './Trending';

function Home() {
    return (
        <div>
            <div className="container">
                <Hero />
                <College />
                <Trending />
            </div>
        </div>
    );
}

export default Home;
