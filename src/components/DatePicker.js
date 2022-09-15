/**
 * @name DatePicker
 * @author Mark Heard
 * @version 2.0
 * @copyright 2020 - 2021
 * @requires ReactJS - A library maintained by Facebook -- https://reactjs.org/
 * @component A component used to select dates.
 * 
 * @param {object} props - Properties and methods that are inherited from the parent component
 * 
 * This component is currently designed to accept (2) inputs: a date 'props.date' and a state handler 'props.onChange'
 * 
 * @property {string} props.date -  Date information inherited from a higher level component
 * 
 * @method props.onChange - State handler function inherited from a higher level component
 * 
 * @returns {<DatePicker date={} onChange={}/ >}  - The JSX datepicker element to be rendered
 */

//Import react library with useEffect and useState hooks
import React, { useEffect, useState } from 'react';

//Import some image files to use for icons
import rightArrow from '../icons/arrow_forward_ios-white-18dp-2.svg';
import leftArrow from '../icons/arrow_back_ios-white-18dp-2.svg';


const DatePicker = props => {

    /**
     * @constant displayCalendar records the state of the calendar's display status
     * @type {boolean} 
     * @default false
     */

    /**
     * @method setDisplayCalendar
     * @returns the state change handler for the @displayCalendar
     */

    const [displayCalendar, setDisplayCalendar] = useState(false);

    /**
     * @constant calendarMode records the calendar's current input mode possible modes are: days and months
     * @type {string}
     * @default 'days'
     */

    /**
     * @method setCalendarMode
     * @returns the state change handler for the @calendarMode state variable
     */

    const [calendarMode, setCalendarMode] = useState('days');

    /**
     * @constant days state array for containing date objects to be rendered to the calendar element
     * @type {Array}
     * @default [currentMonth...] an array of date objects for the current month at the time of evaluation
     */

    /**
     * @method setDays
     * @returns state change handling function for the days state variable
     */

    const [days, setDays] = useState([]);

    /**
     * @method dayNames a method that returns an array of day names
     * @returns {string[]} array containing the names of each day for matted as a string
     * @example monthNames()[new Date().getMonth()] will return the current month
     */

    const dayNames = () => {
        return (
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                "Saturday"
            ]
        );
    }

    /**
     * @method monthNames a method that returns an array of month names
     * @returns {string[]} array containing the names of each month for matted as a string
     * @example monthNames()[new Date().getMonth()] will return the current month
     */

    const monthNames = () => {
        return (
            ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ]
        );
    }

    /**
     * @method formatDate method used to centralize date formatting
     * @returns {string} date formatted as a string
     */

    const formatDate = date => {

        //get the date of the month of the provided date
        const day = date.getDate();
        //get the month of the provided date
        //since months are start their index at zero 1 is added
        // to make it align with the more common month numbering system starting at 1
        const month = date.getMonth() + 1;
        //get the year the provided date
        const year = date.getFullYear();

        //return the date formatted as a sting
        return `${year}/${month}/${day}`;
    };

    /**
     * @method stepDateForward1Day steps props.date forward by one day
     * @returns props.onChange method with the new date formatted as a string
     */

    const stepDateForward1Day = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setDate(date.getDate() + 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(formatDate(newDate));

    }

    /**
     * @method stepDateBackward1Day steps props.date backward by one day
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateBackward1Day = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setDate(date.getDate() - 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(formatDate(newDate));

    }

    /**
     * @method stepDateForward1Month steps props.date forward by one month
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateForward1Month = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setMonth(date.getMonth() + 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(formatDate(newDate));

    }

    /**
     * @method stepDateBackward1Month steps 'props.date' backward by one month
     * @returns the props.onChange method with the new date formatted as a string
     */

    const stepDateBackward1Month = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setMonth(date.getMonth() - 1));
        //update the parent component's state with the new date formatted as a string using the 'props.onChange' method
        return props.onChange(formatDate(newDate));

    }

    /**
     * @method stepDateForward1Year steps 'props.date' forward one year
     * @returns the 'props.onChange' method with the new date formatted as a string
     */

    const stepDateForward1Year = () => {

        //create a new date reference from parent component's state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setFullYear(date.getFullYear() + 1));
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(formatDate(newDate));

    }

    /**
     * @method stepDateBackward1Year steps 'props.date' backward one year
     * @returns {function} props.onChange is supplied with the new date
     */

    const stepDateBackward1Year = () => {

        //create date reference from inherited state
        const date = new Date(props.date);
        //create a date reference for the new date
        const newDate = new Date(date.setFullYear(date.getFullYear() - 1));
        //update the parent component's state with the new date
        return props.onChange(formatDate(newDate));

    }

    /**
     * @method updateMonth - accpets a selected month as a string then updates props.date with a new date that has the selected month
     * @param {string} selectedMonth - month name are supplied by the monthNames method 
     * @returns {method} - props.change is invoked and supplied with a consistently formatted date
     */

    const updateMonth = selectedMonth => {

        //create a new date reference from parent component's state
        const newDate = new Date(props.date)
        //convert selected month to an ordinal number
        const newMonth = monthNames().indexOf(selectedMonth)
        //change the month on the new date
        newDate.setMonth(newMonth)
        //change the calendar mode
        setCalendarMode('days')
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(formatDate(newDate));
    }

    /**
     * @method updateYear - accpets a selected month as a string then updates props.date with a new date that has the selected month
     * @param {string} selectedMonth - month name are supplied by the monthNames method 
     * @returns {method} - props.change is invoked and supplied with a consistently formatted date
     */

    const updateYear = selectedYear => {

        //create a new date reference from parent component's state
        const newDate = new Date(props.date)
        //change the month on the new date
        newDate.setFullYear(selectedYear)
        //update the parent component's state with the new date formatted as a string using the props.onChange method
        return props.onChange(formatDate(newDate));

    }

    /**
     * @method toggleCalendar toggles the calendar's display status between true and false
     * @returns the 'setDisplayCalendar' with the new boolean value
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
     * @method modeRenderer renders the calendar's mode based on the value of calendarMode
     * @returns evaluates 'calendarMode' from state and returns the relevant component
     */

    const modeRenderer = () => {
        if (calendarMode === 'days') {
            return (
                <>
                    <div className='monthSelector' >

                        <button className='leftBtn' onClick={stepDateBackward1Month}><img src={leftArrow} alt='icon of a left arrow' /></button>

                        <span
                            id='monthName'
                            onClick={() => { setCalendarMode('months') }}
                        >
                            {monthNames()[(new Date(props.date).getMonth())]}
                        </span>

                        <button className='rightBtn' onClick={stepDateForward1Month}><img src={rightArrow} alt='icon of a right arrow' /></button>

                    </div>

                    <div className='month'>

                        {
                            //the following script iterates through the dayNames array
                            //for each day it returns an HTML element that creates
                            //the header columns for each day of the week
                            //resulting in the conventional calendar view
                        }

                        {dayNames().map((day, i) => {
                            console.log(day);
                            return (<div key={i} className='dayTitle'>{day[0].toUpperCase()}</div>)
                        })}

                        {//iterate through the days array and render each day in the calendar
                            days.map((day, i) => {

                                //create a new date object for the selected day
                                const selectedDay = new Date(props.date);

                                //if the current day in the loop is equal to the selected date stored in props.date
                                if (formatDate(day) === formatDate(selectedDay)) {

                                    //return an HTML element with all the day's information
                                    //with the class 'selectedDay' to change it background 
                                    //color and denote that this is the currently selected date
                                    return (<div key={i} className='selectedDay day' data={day} onClick={selectDateFromCalendar}>{day.getDate()}</div>)

                                }

                                //return an HTML element with all the day's information
                                return (<div key={i} className='day' data={day} onClick={selectDateFromCalendar}>{day.getDate()}</div>)

                            })}

                    </div>
                </>
            )
        } else if (calendarMode === 'months') {
            return (
                <>
                    <div className='yearSelector' >

                        <button className='leftBtn' onClick={stepDateBackward1Year}><img src={leftArrow} alt='icon of a left arrow' /></button>

                        <span id='selectedYear'>

                            {[(new Date(props.date).getFullYear())]}

                            {/* <input type={'number'}

                                aria-label={'date'}
                                value={[(new Date(props.date).getFullYear())]}
                                placeholder={[(new Date(props.date).getFullYear())]}
                                onChange={e=>{updateYear(e.target.value)}}
                                autocomplete="off"
                                data-form-type="other"
                            /> */}

                        </span>

                        <button className='rightBtn' onClick={stepDateForward1Year}><img src={rightArrow} alt='icon of a right arrow' /></button>

                    </div>

                    <div className='months'>

                        {
                            //the following script iterates through the monthNames array
                            //for each month it returns an HTML element that creates
                            //the header columns for each day of the week
                        }

                        {//iterate through the months names array and render each month in the calendar
                            monthNames().map((month, i) => {

                                //create a new date object for the selected day
                                const selectedDay = new Date(props.date);
                                //get the index of the month in the monthNames array
                                const selectedMonth = monthNames()[selectedDay.getMonth()];

                                //if the current day in the loop is equal to the selected date stored in props.date
                                if ((month) === (selectedMonth)) {

                                    //return an HTML element with all the month's information
                                    //with the class 'selectedMonth' to change it background 
                                    //color and denote that this is the currently selected date
                                    return (<div key={i} className='selectedMonth monthTile' data={month} onClick={() => { updateMonth(month) }}>{selectedMonth}</div>)

                                }

                                //return an HTML element with all the month's information
                                return (<div key={i} className='monthTile' data={month} onClick={() => { updateMonth(month) }}>{month}</div>)

                            })}

                    </div>
                </>
            )
        }
    }

    /**
     * @method selectDateFromCalendar
     * @param {object} e - javascript click event created when a date is selected [clicked] from the calendar element with the mouse
     * @returns the props.onChange method with the new date formatted as a string
     */

    const selectDateFromCalendar = e => {

        //create a new date reference from parent component's state
        const date = new Date(e.target.getAttribute("data"));
        //close the calendar
        toggleCalendar()
        //update the parent component's state with the new date formatted as a string using the 'props.onChange' method
        return props.onChange(formatDate(date));

    }

    /**
     * @method handleChange
     * @param {object} e - javascript click event created when a date is selected [clicked] from the calendar element with the mouse
     * @returns the 'props.onChange' method with the new date formatted as a string
     */

    const handleChange = e => props.onChange(e.target.value)

    /**
     * @method getDays
     * this method builds an array containing date objects to be rendered within
     * an calendar HTML element-- in order to create a calendar that aligns with a 
     * 7-day grid format 
     * 
     * ex:(S-M-T-W-T-F-S) a certain number or days from both the 
     * preceeding and succeeding months must be gathered and added to the 
     * beggining and end of the array respectively
     * @returns the setDays method with a new array of days
     */
    const getDays = () => {

        //format props provided date as a new date object
        const currentDate = new Date(props.date);
        //the month of the current props.date
        const month = currentDate.getMonth();
        //the year of the current props.date
        const year = currentDate.getFullYear();
        //the number of days in the current month
        const numberOfDays = new Date(year, month + 1, 0).getDate();
        //placeholder array that will be used to update state
        const updatedDays = [];

        //for each day in the current month
        for (let i = 0; i < numberOfDays; i++) {

            //referenvce to the current day in this i-level loop
            const day = new Date(year, month, i + 1);

            //if this is the first iteration some days from the preceeding month should be gathered
            if (i === 0) {

                //to fill out the calendar component a few days 
                //from the preceeding month must be added to the 
                //days array, in this case the built-in getDays method
                //will yield the proper number of days
                for (var j = 0; j < day.getDay(); j++) {

                    //create a new date object and add each day to the updatedDays Array for each preceeding day
                    updatedDays.push(new Date(year, month, i - (day.getDay() - (j + 1))));

                }

            }

            //add the current day to the updatedDays array
            updatedDays.push(day);

        }

        //to fill out the calendar component a few days from the
        //succeeding month must be added to the days array
        //since the calendar is based on a 7 day week the modulus
        //of 7 is used to determine the number of remiaing days
        for (let i = 0; i < updatedDays.length % 7; i++) {

            //create a new date object and add each day to the updatedDays Array for each succeeding day
            updatedDays.push(new Date(year, month + 1, i + 1));

        }

        //update the day state variable
        return setDays(updatedDays)

    }

    //everytime props.date changes run the getDays method
    useEffect(() => { getDays() }, [props.date])

    /**
     * MAIN RETURN STATEMENT
     * this is the terminal return statement for the DatePicker componenet
     * all the HTML is contained with in this statement
     * this statement returns the datepicker element to be rendered
     */

    return (
        <div className='datePicker'>

            {
                //below is the HTML for the date selection control
                //the controls are composed of two pairs of buttons
                //one pair to step the date forward or backward by 
                //one day or one year. between these two pairs of 
                //buttons is a text input that allows for direct 
                //manipulation of the date
            }
            <div className='daySelector'>

                {/* <button className='leftBtn2' onClick={stepDateBackward1Year}><img src={leftDblArrow} alt='icon of a double left arrow' /></button> */}

                <button className='leftBtn' onClick={stepDateBackward1Day}><img src={leftArrow} alt='icon of a left arrow' /></button>

                <input type={'text'}
                    aria-label={'date'}
                    value={props.date}
                    placeholder={'yyyy/mm/dd'}
                    onChange={handleChange}
                    onClick={toggleCalendar}
                    autoComplete="off"
                    data-form-type="other"
                />

                <button className='rightBtn' onClick={stepDateForward1Day}>{<img src={rightArrow} alt='icon of a right arrow' />}</button>

                {/* <button className='rightBtn2' onClick={stepDateForward1Year}><img src={rightDblArrow} alt='icon of a boudle right arrow' /></button> */}

            </div>

            {displayCalendar ?
                //if display calender is true render the following HTML element
                (
                    <div className='calendar'>

                        {
                            //below is the HTML for the month selection controls
                            //the controls are composed of two buttons that are 
                            //used to step the date backwards and forwards by 
                            //one month. between the buttons a <span> element
                            //that evaluates props.date for the month of the 
                            //date stored and renders that month as the title 
                            //using the monthNames array
                        }
                        {modeRenderer()}


                    </div>
                    //if displayCalendar is false return null and do not render an additional HTML related to the calendar
                ) : (
                    null
                )}

        </div>

    );

}

//ES6 export statement
export default DatePicker;