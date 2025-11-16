import { useState } from "react";
import DatePicker from "react-datepicker";
import { dateFormat } from "../util/formatter";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker({ datePick }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  function handleDatePick(dates) {
    setDateRange(dates);
    datePick({ from: dates[0], to: dates[1] });
  }

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={handleDatePick}
      isClearable={true}
      placeholderText="Select date range"
      className="date-range-input"
    />
  );
}

export default DateRangePicker;
