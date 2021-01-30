import React, { useEffect, useState } from 'react';
import DatePicker from './DatePicker.js';
import DatePicker2 from './DatePicker2.js';


const Form = () => {

    const formatDate = inputDate => {

        const date = new Date(inputDate);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

    }

    const [startDate, setStartDate] = useState(formatDate(Date.now()));
    const [endDate, setEndDate] = useState(formatDate(Date.now()));
    const [displayModal, setDisplayModal] = useState(false);
    const [displayDateErrorModal, setDisplayDateErrorModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //DATE MODAL CODE

    const dateErrorModal = () => {
        return (
            <div>
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='modal-header title'>Form Data</div>
                        <div className='modal-body'>
                            End Date Cannot Be Before Start Date
                    </div>
                        <div className='modal-footer'>
                            <button className='btn' onClick={toggleDateErorModal}>Ok</button>
                        </div>
                    </div>

                </div>
                <div className='modal-bg' onClick={toggleDateErorModal}></div>
            </div>
        );
    }

    //MODAL CODE

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

    const toggleDateErorModal = () => {

        if (displayDateErrorModal === false) {
            return setDisplayDateErrorModal(true);
        }

        return setDisplayDateErrorModal(false);

    }

    const toggleModal = () => {

        if (displayModal === false) {
            return setDisplayModal(true);
        }

        return setDisplayModal(false);

    }

    // useEffect(() => {

    //     const start = new Date(startDate);
    //     const end = new Date(endDate);

    //     if(start.getTime()>end.getTime()){

    //         const newEndDate = start.setDate(start.getDate() + 1);

    //         formatEndDate(newEndDate);
    //         toggleDateErorModal();

    //     }

    // })

    return (
        <div className='form'>
            <div className='form-field'>
                <div className='title'>Name</div>
                <input className='name' type='text' value={name} onChange={e => { setName(e.target.value) }} />
            </div>
            <div className='form-field'>
                <div className='title'>Email</div>
                <input className='email' type='email' value={email} onChange={e => { setEmail(e.target.value) }} />
            </div>

            <div className='form-field'>
                <div className='startDate'>
                    <div className='title'>Start Date</div>
                    <DatePicker date={startDate} onChange={setStartDate} />
                </div>
            </div>

            {/* <div className='form-field'>
                <div className='endDate'>
                    <div className='title'>End Date</div>
                    <DatePicker date={endDate} onChange={setEndDate} />
                </div>
            </div> */}

            <div className='form-field'>
                <div className='endDate'>
                    <div className='title'>End Date</div>
                    <DatePicker2 date={endDate} onChange={setEndDate} />
                </div>
            </div>

            <div className='form-field'>
                <button className='btn' onClick={toggleModal}>Submit</button>
            </div>
            {displayModal === true ? modal() : null}
            {displayDateErrorModal === true ? dateErrorModal() : null}
        </div>

    );
};

export default Form;