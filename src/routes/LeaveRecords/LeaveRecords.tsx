import React, { useState } from "react";
import FullCalendar  from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './LeaveRecord.css'
import { getYearList } from "../../utils/helper";



const LeaveRecords: React.FC = () => {
  const [associate, setAssociate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<number | "">("");

  const handleAssociateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAssociate(event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setYear(parseInt(event.target.value));
  };

  // Dummy attendance and absence data
  const eventData = [
    { title: "Absence", date: "2024-03-01", type: 'absence' },
    { title: "Absence", date: "2024-03-05" , type: 'absence' },
    // Add more data as needed
  ];

  const yearList = getYearList();

  const eventClassNames = ({ event }: { event: any }) => {
    if (event.extendedProps.type === 'absence') {
      return 'absence-event';
    }
    return ''; // Return empty string for other events
  };

  return (
    <div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Associate:
        </label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={associate}
          onChange={handleAssociateChange}
        >
          <option value="associate1">Associate 1</option>
          <option value="associate2">Associate 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Month
        </label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={month}
          onChange={handleMonthChange}
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>


      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Year:
        </label>
        <select
          className="w-full px-3 py-2 border rounded"
          value={year}
          onChange={handleYearChange}
        >
          {yearList.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={eventData}
        eventClassNames={eventClassNames}
        />
      </div>
    </div>
  );
};

export default LeaveRecords;
