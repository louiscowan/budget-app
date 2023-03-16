import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../styles/App.css';
import AddEventPage from './AddEventPage';



function TheCalendar() {
  const [events, setEvents] = useState([]);
  const [ clickedDate,  setClickedDate] = useState();
  const [ showForm,  setShowForm] = useState(false);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  function handleDeleteEvent(index) {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);

    localStorage.setItem('events', JSON.stringify(newEvents));
  }

  function closeForm() {
    setShowForm(false)
  }

  function handleDayClicked(date) {
    setClickedDate(date.toLocaleDateString())
    setShowForm(true)
  }

  return (
    <div className="App">
      <h1>Calendar App</h1>
        <div className="CalendarContainer">
          <Calendar
            onClickDay={(date) => handleDayClicked(date)}          
            tileContent={({ date }) => {
              const event = events.find((event) => event.date === date.toLocaleDateString());
              if (event) {
                return <span className="EventIndicator">{event.description}</span>;
              }
            }}
          />
          <div className="EventList">
            {events.length === 0 && <p>No events added yet</p>}
            {events.map((event, index) => (
              <div className="Event" key={index}>
                <p className="EventDate">{event.date}</p>
                <p className="EventDescription">{event.description}</p>
                <p className="EventPhoneNumber">{event.phoneNumber}</p>
                <button onClick={() => handleDeleteEvent(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
        {showForm
        ? <div>
            <AddEventPage date={clickedDate} closeFormFunction={closeForm}/>
          </div>   
        :  null
        }
    </div>
  );
}

export default TheCalendar;


