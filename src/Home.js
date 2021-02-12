import React from 'react';

import Banner from './Banner';
import Card from './Card';
import './Home.css';

const home = () => {
    return (
        <div className='home'>
            <Banner/>
            <div className='home__section'>
                <Card
                    src = "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="Unique activites we can do together, "
                />
                <Card/>
                <Card/>
            </div>
            <div className='home__section'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default home;