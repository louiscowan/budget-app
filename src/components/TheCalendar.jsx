import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { db } from '../firebase';
import '../styles/App.css';
import AddEventPage from './AddEventPage';

function TheCalendar() {
  const [events, setEvents] = useState([]);
  const [ clickedDate,  setClickedDate] = useState();
  const [ showForm,  setShowForm] = useState(false);
  const [ unformatedDate,  setUnformatedDate] = useState(false);

  const eventCollection = collection(db, 'budgeting-times')

  useEffect(() => {
    const getEventTimes = async() => {
      const eventTimes = await getDocs(eventCollection)
      const storedEvents = [];
      eventTimes.forEach((doc) => {
        console.log({...doc.data(), id: doc.id })
        storedEvents.push({...doc.data(), id: doc.id });
      });
      setEvents(storedEvents);
    }
    getEventTimes()
  }, []);

  function closeForm() {
    setShowForm(false)
  }

  function handleDayClicked(date) {
    setUnformatedDate(date)
    setClickedDate(date.toLocaleDateString())
    setShowForm(true)
  }

  function getEventForTimeSlot(events, timeSlot) {
    const event = events.find((event) => event.eventTime === timeSlot);
    if (event) {
      return (
        <div>
          <p>{event.eventTime}</p>
          <p>{event.description}</p>
          <p>{event.phoneNumber}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div class="calendar-app">
      <h1 class="calendar-app-header">Calendar App</h1>
      <div class="calendar-app-container">
        <div class="calendar-app-calendar">
          <Calendar
            onClickDay={handleDayClicked}
            tileContent={({ date }) => {
              const dayOfWeek = date.getDay();
              const eventsForDay = events.filter((event) => event.date === date.toLocaleDateString());
              if (dayOfWeek === 2 || dayOfWeek === 4) {
                // create and return an array of pre-existing event blocks for Tuesday and Thursday
                return [
                  <div key="1" class="calendar-app-event">
                    {getEventForTimeSlot(eventsForDay, "9:30 - 10:30") || <div><p>9:30 - 10:30</p><p style={{color: "green"}}>Available</p></div>}
                  </div>,
                  <div key="2" class="calendar-app-event">
                    {getEventForTimeSlot(eventsForDay, "10:30 - 11:30") || <div><p>10:30 - 11:30</p><p style={{color: "green"}}>Available</p></div>}
                  </div>,
                  <div key="3" class="calendar-app-event">
                    {getEventForTimeSlot(eventsForDay, "11:30 - 12:30") || <div><p>11:30 - 12:30</p><p style={{color: "green"}}>Available</p></div>}
                  </div>,
                ];
              } else if (dayOfWeek === 5) {
                // create and return an array of pre-existing event blocks for Friday
                return [
                  <div key="1" class="calendar-app-event">
                    {getEventForTimeSlot(eventsForDay, "9:45 - 10:45") || <div><p>9:45 - 10:45</p><p style={{color: "green"}}>Available</p></div>}
                  </div>,
                  <div key="2" class="calendar-app-event">
                    {getEventForTimeSlot(eventsForDay, "10:45 - 11:45") || <div><p>10:45 - 11:45</p><p style={{color: "green"}}>Available</p></div>}
                  </div>,
                  <div key="3" class="calendar-app-event">
                    {getEventForTimeSlot(eventsForDay, "11:45 - 12:45") || <div><p>11:45 - 12:45</p><p style={{color: "green"}}>Available</p></div>}
                  </div>,
                ];
              } else if (eventsForDay.length > 0) {
                return eventsForDay.map((event) => (
                  <div key={event.id} class="calendar-app-event">
                    <p>{event.eventTime}</p>
                    <p>{event.description}</p>
                    <p>{event.phoneNumber}</p>
                  </div>
                ));
              }
            }}
          />
        </div>
      </div>
      {showForm ? (
        <div class="calendar-app-add-event">
          <AddEventPage date={clickedDate} events={events} unformatedDate={unformatedDate} closeFormFunction={closeForm} />
        </div>
      ) : null}
    </div>
  );
}

export default TheCalendar;


