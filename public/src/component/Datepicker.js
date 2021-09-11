import React, { forwardRef } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Datepicker({ startDate, setStartDate }) {
     const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
          <button
               className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
               onClick={onClick} ref={ref}>
               {value}
          </button>
     ));
     return (
          <DatePicker
               className="z-50"
               dateFormat="yyyy/MM/dd"
               // showTimeSelect
               selected={startDate}
               onChange={(date) => setStartDate(date)}
               customInput={<ExampleCustomInput />}
          />
     );
}

export default Datepicker
