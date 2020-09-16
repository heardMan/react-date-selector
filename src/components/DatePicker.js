import React, { useState } from 'react';
import dateUtil from '../utility/date.js';

const DatePicker = props => {

    const [displayCalendar, setDisplayCalendar] = useState(false);

    const formattedDate = () => {
        
        const currentDate = new Date(props.date);

        console.log(currentDate);
        const day = currentDate.getDate();
        const month = currentDate.getMonth()+1;
        const year = currentDate.getFullYear();
        
        
        return `${month}/${day}/${year}`;
    }

    const stepDateForward1Day = () => {

        const currentDate = new Date(props.date);
        const nextDate = currentDate.setDate(currentDate.getDate() + 1);

        return props.onChange(nextDate);

    }

    const stepDateBackward1Day = () => {

        const currentDate = new Date(props.date);
        const nextDate = currentDate.setDate(currentDate.getDate() - 1);

        return props.onChange(nextDate);

    }

    const stepDateForward1Month = () => {

        const currentDate = new Date(props.date);
        const nextDate = currentDate.setMonth(currentDate.getMonth() + 1);

        return props.onChange(nextDate);

    }

    const stepDateBackward1Month = () => {

        const currentDate = new Date(props.date);
        const nextDate = currentDate.setMonth(currentDate.getMonth() - 1);

        return props.onChange(nextDate);

    }

    const toggleCalendar = () => {

        if (displayCalendar === false) {

            return setDisplayCalendar(true);

        }

        return setDisplayCalendar(false);

    }

    const selectDateFromCalendar = e => {

        return props.onChange(e.target.getAttribute("data"));

    }

    const getDays = () => {

        const currentDate = new Date(props.date);
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const numberOfDays = new Date(year, month + 1, 0).getDate();
        const days = [];

        for (let i = 0; i < numberOfDays; i++) {

            const day = new Date(year, month, i + 1);

            if (i === 0) {

                for (var j = 0; j < day.getDay(); j++) {

                    days.push(new Date(year, month, i - (day.getDay() - (j + 1))));

                }

            }

            days.push(day);

        }

        for (let i = 0; i < days.length % 7; i++) {

            days.push(new Date(year, month + 1, i + 1));

        }

        return (

            <div className='calendar'>

                <div className='monthSelector'>
                    <button className='leftBtn' onClick={stepDateBackward1Month}>{'<'}</button>
                    <span>{dateUtil.formatMonth(month)}</span>
                    <button className='rightBtn' onClick={stepDateForward1Month}>{'>'}</button>
                </div>

                <div className='month'>

                    <div className='dayTitle'>S</div>
                    <div className='dayTitle'>M</div>
                    <div className='dayTitle'>T</div>
                    <div className='dayTitle'>W</div>
                    <div className='dayTitle'>T</div>
                    <div className='dayTitle'>F</div>
                    <div className='dayTitle'>S</div>

                    {days.map((day, i) => {

                        const dayStr = `${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`;

                        const selectedDay = new Date(props.date);

                        const selectedDayStr = `${selectedDay.getFullYear()}-${selectedDay.getMonth()}-${selectedDay.getDate()}`;

                        if (dayStr === selectedDayStr) {

                            return (<div key={i} className='selectedDay day' data={day} onClick={selectDateFromCalendar}>{day.getDate()}</div>)

                        }

                        return (<div key={i} className='day' data={day} onClick={selectDateFromCalendar}>{day.getDate()}</div>)

                    })}

                </div>

            </div>
        );

    }

    return (<div className='datePicker'>

        <div className='daySelector'>
            <button className='leftBtn' onClick={stepDateBackward1Day}>{'<'}</button>
            <div onClick={toggleCalendar} >{formattedDate()}</div>
            <button className='rightBtn' onClick={stepDateForward1Day}>{'>'}</button>
        </div>

        {displayCalendar === true ? getDays() : null}

    </div>

    );

}

export default DatePicker;