import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Search.css';

import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    } 

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of guests <PeopleIcon/></h2>
            <input min={0} defaultValue={2} type='number' />
            <Button>Search Airbnb</Button>
        </div>
    );
}; 

export default Search;

