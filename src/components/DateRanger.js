import React, { useEffect, useState } from 'react';
import DatePicker from './DatePicker.js';

/**
 * The main purpose of this form is to showcase a potential use case for the react date picker
 */


const DateRanger = () => {

    const formatDate = inputDate => {

        const date = new Date(inputDate);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    }

    const [startDate, setStartDate] = useState(formatDate(Date.now()));
    const [endDate, setEndDate] = useState(formatDate(Date.now()));

    return (
        <div className='date-ranger'>
                <div className=''>
                    <div className='title'>Under Development</div>
                    <DatePicker date={startDate} onChange={setStartDate} />
                </div>
                {/* <div className=''>
                    <div className='title'>End Date</div>
                    <DatePicker date={endDate} onChange={setEndDate} />
                </div> */}
        </div>

    );
};

export default DateRanger;