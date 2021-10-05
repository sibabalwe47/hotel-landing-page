import react, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as SEARCH_ACTIONS from "../../../../store/actions/search/actions";

const Dates = ({ type, action }) => {
  // Use dispatch
  const dispatch = useDispatch();
  // Component state
  const [startDate, setStartDate] = useState(new Date());
  // handle date change
  const onDateChange = (date) => {
    // Set date
    setStartDate(date);
    // convert date
    const convertedDate = moment(date).format("DD MMM YYYY");
    // Call action to send data to parent
    action({
      type,
      date: convertedDate,
    });
  };

  return (
    <DatePicker selected={startDate} onChange={(date) => onDateChange(date)} />
  );
};

export default Dates;
