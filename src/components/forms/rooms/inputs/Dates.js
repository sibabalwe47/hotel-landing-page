import react, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

const Dates = () => {
    // Component state
    const [startDate, setStartDate] = useState(new Date());
    // handle date change
    const onDateChange = (date) => {
        // Set date
        setStartDate(date)
        // convert date
        const convertedDate = moment(startDate).format("DD MMM YYYY");

    }

    return <DatePicker selected={startDate} onChange={date => onDateChange(date)} />
}

export default Dates;