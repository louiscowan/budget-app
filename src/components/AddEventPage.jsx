import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore' ;
import '../styles/App.css';


export function BudgetingTimes({filteredEvents, setTimeSlot, setEventTime, dayOfWeek}) {

  if(dayOfWeek === 2) {
    return <section className="time-slot-section">
      <h3>Time Slots</h3>
    <div className="choose-time"><label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
    <input 
        type="radio"
        id="9:30 - 10:30"
        name="time-slot"
        value="1"
        onClick={(e) => {
          setTimeSlot(e.target.value)
          setEventTime("9:30 - 10:30")
        }}
        required        
    />
    </div>
    <div className="choose-time"><label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
    <input 
        type="radio"
        id="10:30 - 11:30"
        name="time-slot"
        value="2"
         onClick={(e) => {
          setTimeSlot(e.target.value)
          setEventTime("10:30 - 11:30")
        }}
        required        
    />
    </div>
    <div className="choose-time"><label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
    <input 
        type="radio"
        id="11:30 - 12:30"
        name="time-slot"
        value="3"
         onClick={(e) => {
          setTimeSlot(e.target.value)
          setEventTime("11:30 - 12:30")
        }}
        required        
    />
    </div>
    </section>
  } else if(dayOfWeek === 3) {
    return <section className="time-slot-section">
      <h3>Time Slot</h3>
          <div className="choose-time"><label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
          <input 
              type="radio"
              id="9:30 - 10:30"
              name="time-slot"
              value="1"
              onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("9:30 - 10:30")
              }}
              required        
          />
          </div>
          <div className="choose-time"><label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
          <input 
              type="radio"
              id="10:30 - 11:30"
              name="time-slot"
              value="2"
               onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("10:30 - 11:30")
              }}
              required        
          />
          </div>
          <div className="choose-time"><label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
          <input 
              type="radio"
              id="11:30 - 12:30"
              name="time-slot"
              value="3"
               onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("11:30 - 12:30")
              }}
              required        
          />
          </div>
    </section>
  } else if (dayOfWeek === 5) {
    return <section className="time-slot-section">
      <h3>Time Slot</h3>
          <div className="choose-time"><label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
          <input 
              type="radio"
              id="9:30 - 10:30"
              name="time-slot"
              value="1"
              onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("9:30 - 10:30")
              }}
              required        
          />
          </div>
          <div className="choose-time"><label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
          <input 
              type="radio"
              id="10:30 - 11:30"
              name="time-slot"
              value="2"
               onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("10:30 - 11:30")
              }}
              required        
          />
          </div>
          <div className="choose-time"><label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
          <input 
              type="radio"
              id="11:30 - 12:30"
              name="time-slot"
              value="3"
               onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("11:30 - 12:30")
              }}
              required        
          />
          </div>
    </section>
  } else {
    return<></>
  }
}

function AddEventPage({date, closeFormFunction, events, unformatedDate}) {
  const [   description, setDescription ] = useState("");
  const [   phoneNumber, setPhoneNumber ] = useState("");
  const [   timeSlot, setTimeSlot   ] = useState("");
  const [   eventTime, setEventTime   ] = useState("");
  const [   filteredEvents, setFilteredEvents   ] = useState([]);

  const budgetingTimesRef = collection(db, 'budgeting-times')

  const dayOfWeek = unformatedDate.getDay()

  function handleSubmit(event) {
    event.preventDefault();
    handleAddEvent(description, phoneNumber);
    closeFormFunction()
  }

  async function handleAddEvent() {
    await addDoc(budgetingTimesRef, {
        description: description,
        phoneNumber: phoneNumber,
        timeSlot: timeSlot,
        date: date,
        eventTime: eventTime,
    })
    window.location.reload()
  }

  async function deleteBooking(id) {
    const userDoc = doc(db, 'budgeting-times', id)
    await deleteDoc(userDoc)
    window.location.reload()
  }

  return (
    <div>
      <button className="backButton" onClick={() => closeFormFunction()}>Back</button>
    <div className='filteredEventsList'>
      {
        filteredEvents?.map((event) => {
          return <div className="filteredEvents">
                        <div key={event.id} class="calendarAppEvent">
                          <p>{event.eventTime}</p>
                          <p>{event.description}</p>
                          <p>{event.phoneNumber}</p>
                          <button onClick={() => deleteBooking(event.id)}>Delete Booking</button>
                        </div>
                      </div>
        })
      }
    </div>
    <div class="add-event-page">
  <h2>Add Event</h2>
  <form class="add-event-form" onSubmit={handleSubmit}>
      Date:
      <input class="add-event-form__input" type="text" value={date} readOnly />
    <br />
    <label>
      Description:
      <textarea
        class="add-event-form__textarea"
        rows="5"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
    </label>
    <br />
    <label>
      Phone Number:
      <input
        class="add-event-form__input"
        type="text"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
    </label>
    <br />
    <BudgetingTimes
      class="add-event-form__budgeting-times"
      filteredEvents={filteredEvents}
      setTimeSlot={setTimeSlot}
      setEventTime={setEventTime}
      dayOfWeek={dayOfWeek}
    />
    <button class="add-event-form__submit-button" type="submit">Add Event</button>
  </form>
  <button class="add-event-form__cancel-button" onClick={() => {
    closeFormFunction()
  }}>Cancel</button>
</div>
    </div>
  );
}

export default AddEventPage