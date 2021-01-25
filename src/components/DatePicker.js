import React, { useState } from 'react';
import dateUtil from '../utility/date.js';

/**
 * DatePicker
 * @author Mark Heard
 * @copyright 2020 - 2021
 * @requires ReactJS - library maintained by facebook
 * @requires utility/date.js - a collection of date related method used to streamline coding of date logic
 * @param {object} props - properties and methods inherited fromthe parent component
 * This component makes use of state properties and methods inherited from a higher level component
 * @property {string} props.date - this is the date information inherited from a higher level component
 * @method props.onChange - this is the method that handle updating the date variable in the parent component when it is changed by the Date Picker
 * @returns the JSX datepicker element to be rendered
 */

const DatePicker = props => {

    /**
     * @constant displayCalendar
     * @type {boolean} 
     * records the current state of the calendar's display status
     * if true the calendar is rendered
     * if false the calendar will not be visible
     */

    /**
     * @method setDisplayCalendar
     * @default false
     * @returns state change handling function
     */

    const [displayCalendar, setDisplayCalendar] = useState(false);

    /**
     * @method stepDateForward1Day
     * steps date forward one day
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateForward1Day = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setDate(date.getDate() + 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * @method stepDateBackward1Day
     * steps date backward one day
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateBackward1Day = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setDate(date.getDate() - 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * @method stepDateForward1Month
     * steps date forward one month
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateForward1Month = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setMonth(date.getMonth() + 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * @method stepDateBackward1Month
     * steps date backward one month
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateBackward1Month = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setMonth(date.getMonth() - 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * @method stepDateForward1Year
     * steps date forward one year
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateForward1Year = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setFullYear(date.getFullYear() + 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * @method stepDateBackward1Year
     * steps date backward one year
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateBackward1Year = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setFullYear(date.getFullYear() - 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(`${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`);

    }

    /**
     * @method toggleCalendar
     * toggles the calendar's display variable between true and false
     * @returns setDisplayCalendar with the new boolean value
     */

    const toggleCalendar = () => {

        //if the calendar is not displayed
        if (displayCalendar === false) {
            //change the calendar's display state to true
            return setDisplayCalendar(true);
        }
        //change the calendar's display state to false
        return setDisplayCalendar(false);

    }

    /**
     * @method selectDateFromCalendar
     * @param {object} e - javascript click event created when a date is selected [clicked] from the calendar element with the mouse 
     * @returns the props.onChange method with the new date formatted as a string
     */

    const selectDateFromCalendar = e => {

        //create a new date reference from parent component's state
        const date = new Date(e.target.getAttribute("data"));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);

    }

    /**
     * @method handleChange
     * @param {object} e - javascript click event created when a date is selected [clicked] from the calendar element with the mouse
     * @returns the props.onChange method with the new date formatted as a string
     */

    const handleChange = e => props.onChange(e.target.value)

    /**
     * @method getDays
     */
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

    /**
     * GETDAYS END
     */

    /**
     * this is the terminal return statement for the DatePicker componenet
     * this statement returns the datepicker element to be rendered
     */

    return (

        <div className='datePicker'>

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