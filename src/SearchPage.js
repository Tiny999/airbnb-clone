import React from 'react';

import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult';

import './SearchPage.css';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 February to 31 February . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>

                
                <SearchResult 
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                    location="Private room in center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
                    star={4.73}
                    price="N3,000 / night"
                    total="N12,000 total"
                />
                <SearchResult 
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                    location="Private room in center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
                    star={4.73}
                    price="N3,000 / night"
                    total="N12,000 total"
                />
            </div>        
        </div>
    );
};

export default SearchPage;