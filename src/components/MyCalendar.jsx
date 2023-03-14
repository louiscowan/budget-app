import React, {useState} from "react";
import { Calendar } from "react-calendar";
import CalendarDay from "./CalendarDay";

function MyCalendar() {
    const [date, setDate] = useState(new Date());
    const [eventData, setEventData] = useState({});
  
    // Define the times array
    const times = [
      '9:30-10:30',
      '10:30-11:30',
      '11:30-12:30',
      '12:30-1:30',
      '1:30-2:30',
      '2:30-3:30'
    ];
  
    function handleDateChange(newDate) {
      setDate(newDate);
    }
  
    function handleTextInputChange(e) {
      const { name, value } = e.target;
      const [dateStr, inputName] = name.split('-');
      console.log("hello", eventData)
      setEventData(prevEventData => ({
        ...prevEventData,
        [dateStr]: {
          ...prevEventData[dateStr],
          [inputName]: value
        }
      }));
    }
  
    function tileContent({ date, view }) {
      if (view === 'month') {
        if (date.getDay() !== 6 && date.getDay() !== 0) { // Weekdays only
          const eventValues = eventData[date.toISOString().slice(0, 10)] || {}; // Get event data for this date, or an empty object if none exists
          return (
            <CalendarDay
              date={date.toISOString().slice(0, 10)}
              eventValues={eventValues}
              handleTextInputChange={handleTextInputChange}
              times={times} // Pass the times array to CalendarDay
            />
          );
        } else { // Weekend
          return (
            <div>
              <span>{date.getDate()}</span>
            </div>
          );
        }
      }
    }
  
    return (
      <div>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileContent={tileContent}
        />
      </div>
    );
  }
  
  export default MyCalendar