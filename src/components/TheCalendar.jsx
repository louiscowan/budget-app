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

  async function handleDeleteEvent(id) {
      const userDoc = doc(db, 'budeting-times', id)
      await deleteDoc(userDoc)
      window.location.reload()
  }

  function closeForm() {
    setShowForm(false)
  }

  function handleDayClicked(date) {
    setUnformatedDate(date)
    setClickedDate(date.toLocaleDateString())
    setShowForm(true)
  }

  return (
    <div class="calendar-app">
      <h1 class="calendar-app-header">Calendar App</h1>
      <div class="calendar-app-container">
        <div class="calendar-app-calendar">
          <Calendar
            onClickDay={handleDayClicked}
            tileContent={({ date }) => {
              const eventsForDay = events.filter((event) => event.date === date.toLocaleDateString());
              if (eventsForDay.length > 0) {
                console.log(eventsForDay)
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


