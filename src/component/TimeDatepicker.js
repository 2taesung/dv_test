import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReactDatepicker() {
  const [dateTime, setDateTime] = useState(new Date());
  console.log(dateTime)
  return (
    <div>
      <DatePicker
        selected={dateTime}
        onChange={date => setDateTime(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={10}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
}

// useEffect(() => {
//   props.onChange(dateTime);
// }, [dateTime, props]);