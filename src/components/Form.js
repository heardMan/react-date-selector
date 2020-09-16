import React, { useEffect, useState } from 'react';
import DatePicker from '../components/DatePicker.js';

const Form = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const formatStartDate = (rawDate) => {

        const currentDate = new Date(rawDate);
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        return setStartDate(`${year}/${month}/${day}`);

    }

    const formatEndDate = (rawDate) => {

        const currentDate = new Date(rawDate);
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        return setEndDate(`${year}/${month}/${day}`);

    }

    useEffect(() => {

        formatStartDate((Date.now()));
        formatEndDate((Date.now()));

    }, [])

    return (
        <div className='form'>
            <div className='form-field'>
                <div className='title'>Name</div>
                <input type='text' />
            </div>
            <div className='form-field'>
                <div className='title'>Email</div>
                <input type='email' />
            </div>
            <div className='form-field'>
                <div className='startDate'>
                    <div className='title'>Start Date</div>
                    <DatePicker date={startDate} onChange={formatStartDate} />
                </div>
            </div>

            <div className='form-field'>
                <div className='endDate'>
                    <div className='title'>End Date</div>
                    <DatePicker date={endDate} onChange={formatEndDate} />
                </div>
            </div>
            <div className='form-field'>
                <button className='submit'>Submit</button>
            </div>


        </div>
    );
};

export default Form;