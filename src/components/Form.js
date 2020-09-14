import React, {useEffect, useState } from 'react';
import DatePicker from '../components/DatePicker.js';

const Form = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const formatStartDate = (rawDate) => {

        const currentDate = new Date(rawDate);
        const day = currentDate.getDate();
        const month = currentDate.getMonth()+1;
        const year = currentDate.getFullYear();
        
        return setStartDate(`${year},${month},${day}`);

    }

    const formatEndDate = (rawDate) => {

        const currentDate = new Date(rawDate);
        const day = currentDate.getDate();
        const month = currentDate.getMonth()+1;
        const year = currentDate.getFullYear();
        
        return setEndDate(`${year},${month},${day}`);

    }

    useEffect(() => {

        formatStartDate((Date.now()));
        formatEndDate((Date.now()));
        
    }, [])

  return (
      <div className='dateRange'>
          <div>
          <div>Start Date</div>
          <DatePicker date={startDate} onChange={formatStartDate} />
          </div>
          <div>
          <div>End Date</div>
          <DatePicker date={endDate} onChange={formatEndDate} />
          </div>
          
          
      </div>
  );
};

export default Form;