import React, { useEffect, useState } from 'react';
import DatePicker from '../components/DatePicker.js';
import { buildQueries } from '@testing-library/react';

const Form = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [displayModal, setDisplayModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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

    const modal = () => {
        return (
            <div>
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header title'>Form Data</div>
                    <div className='modal-body'>
                        <div>Name: {name}</div>
                        <div>Email: {email}</div>
                        <div>Start Date: {startDate}</div>
                        <div>End Date: {endDate}</div>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn' onClick={toggleModal}>Ok</button>
                    </div>
                </div>
                
            </div>
            <div className='modal-bg' onClick={toggleModal}></div>
            </div>
        );
    }

    const toggleModal = () => {

        if (displayModal === false) {

            return setDisplayModal(true);

        }

        return setDisplayModal(false);

    }


    useEffect(() => {

        formatStartDate((Date.now()));
        formatEndDate((Date.now()));

    }, [])

    return (
        <div className='form'>
            <div className='form-field'>
                <div className='title'>Name</div>
                <input className='name' type='text' value={name} onChange={e=>{setName(e.target.value)}}/>
            </div>
            <div className='form-field'>
                <div className='title'>Email</div>
                <input className='email' type='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
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
                <button className='btn' onClick={toggleModal}>Submit</button>
            </div>
            {displayModal === true ? modal() : null}
        </div>
    );
};

export default Form;