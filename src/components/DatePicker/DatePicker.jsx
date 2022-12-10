import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerl = () => {
  const [startDate, setStartDate] = useState(new Date());
  const now = new Date();

  return (
    <DatePicker
      selected={startDate}
      includeDateIntervals={[
        {
          start: new Date(
            now.getFullYear() - 10,
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
