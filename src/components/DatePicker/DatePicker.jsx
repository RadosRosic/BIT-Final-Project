import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerl = ({startDate, setStartDate}) => {
  const now = new Date();

  return (
    <DatePicker
      selected={startDate}
      includeDateIntervals={[
        {
          start: new Date(
            now.getFullYear() - 100,
            now.getMonth(),
            now.getDate()
          ),
          end: now,
        },
      ]}
      onChange={(date = Date) => setStartDate(date)}
    />
  );
};

export default DatePickerl;
