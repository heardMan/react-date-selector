import React, { useState } from 'react';
import dateUtil from '../utility/date.js';

/**
 * @constant
 * @function
 * @param {object} props properties object 
 * 
 */

const DatePicker = props => {

    /**
     * Remembers the state of the calendar's visibility
     * @const {boolean} displayCalendar
     * @default false
    */
    const [displayCalendar, setDisplayCalendar] = useState(false);

    /**
     * Steps day of props.date forward (1) Day
     * @param {string} props.date ISO 8601 date string
     */

    const stepDateForward1Day = () => {

        const date = new Date(props.date);
        const newDate = new Date(date.setDate(date.getDate() + 1));

        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * Steps day of props.date backward (1) Day
     * @param {string} props.date ISO 8601 date string
     */

    const stepDateBackward1Day = () => {

        const date = new Date(props.date);
        const newDate = new Date(date.setDate(date.getDate() - 1));

        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * Steps day of props.date forward (1) Month
     * @param {string} props.date ISO 8601 date string
     */

    const stepDateForward1Month = () => {

        const date = new Date(props.date);
        const newDate = new Date(date.setMonth(date.getMonth() + 1));

        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * Steps day of props.date backward (1) Month
     * @param {string} props.date ISO 8601 date string
     */

    const stepDateBackward1Month = () => {

        const date = new Date(props.date);
        const newDate = new Date(date.setMonth(date.getMonth() - 1));

        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * Steps day of props.date forward (1) Year
     * @param {string} props.date ISO 8601 date string
     */

    const stepDateForward1Year = () => {

        const date = new Date(props.date);
        const newDate = new Date(date.setFullYear(date.getFullYear() + 1));

        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * Steps day of props.date backward (1) Year
     * @param {string} props.date ISO 8601 date string
     */

    const stepDateBackward1Year = () => {

        const date = new Date(props.date);
        const newDate = new Date(date.setFullYear(date.getFullYear() - 1));

        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * 
     */

    const toggleCalendar = () => {

        if (displayCalendar === false) {

            return setDisplayCalendar(true);

        }

        return setDisplayCalendar(false);

    }

    const selectDateFromCalendar = e => {

        const date = new Date(e.target.getAttribute("data"));
        return props.onChange(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);

    }

    const handleChange = e => props.onChange(e.target.value)

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
            <button className='leftBtn2' onClick={stepDateBackward1Year}>{'<<'}</button>
            <button className='leftBtn' onClick={stepDateBackward1Day}>{'<'}</button>
            <input type='text'
                value={props.date}
                placeholder={'yyyy/mm/dd'}
                onChange={handleChange}
                onClick={toggleCalendar} />
            <button className='rightBtn' onClick={stepDateForward1Day}>{'>'}</button>
            <button className='rightBtn2' onClick={stepDateForward1Year}>{'>>'}</button>
        </div>

        {displayCalendar === true ? getDays() : null}

    </div>

    );

}

export default DatePicker;