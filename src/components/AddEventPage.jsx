import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore' ;
import '../styles/App.css';


export function BudgetingTimes({setTimeSlot, setEventTime, dayOfWeek}) {
  console.log("hello", dayOfWeek)
  if(dayOfWeek === 2) {
    return <section>
      <h3>Time Slot</h3>
    <label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
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
    <label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
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
    <label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
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
    <label htmlFor="12:30 - 1:30">12:30 - 1:30</label>
    <input 
        type="radio"
        id="12:30 - 1:30"
        name="time-slot"
        value="4"
         onClick={(e) => {
          setTimeSlot(e.target.value)
          setEventTime("12:30 - 1:30")
        }}
        required        
    />
    </section>
  } else if(dayOfWeek === 4) {
    return <section>
      <h3>Time Slot</h3>
          <label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
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
          <label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
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
          <label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
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
          <label htmlFor="12:30 - 1:30">12:30 - 1:30</label>
          <input 
              type="radio"
              id="12:30 - 1:30"
              name="time-slot"
              value="4"
               onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("12:30 - 1:30")
              }}
              required        
          />
    </section>
  } else if (dayOfWeek === 5) {
    return <section>
      <h3>Time Slot</h3>
          <label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
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
          <label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
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
          <label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
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
          <label htmlFor="12:30 - 1:30">12:30 - 1:30</label>
          <input 
              type="radio"
              id="12:30 - 1:30"
              name="time-slot"
              value="4"
               onClick={(e) => {
                setTimeSlot(e.target.value)
                setEventTime("12:30 - 1:30")
              }}
              required        
          />
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

  return (
    <div className="AddEventPage">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" value={date} readOnly />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <br />
        <BudgetingTimes setTimeSlot={setTimeSlot} setEventTime={setEventTime} dayOfWeek={dayOfWeek}/>
        <button type="submit">Add Event</button>
      </form>
      <button onClick={() => {
        closeFormFunction()
      }}>Cancel</button>
    </div>
  );
}

export default AddEventPage