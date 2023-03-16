import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore' ;
import { ref } from "firebase/storage";
import '../styles/App.css';


function AddEventPage({date, closeFormFunction}) {
  const [   description, setDescription ] = useState("");
  const [   phoneNumber, setPhoneNumber ] = useState("");
  const [   timeSlot, setTimeSlot   ] = useState("");

    const budgetingTimesRef = collection(db, 'budgeting-times')

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
        date: date
    })
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
        <section>
            <h3>Time Slot</h3>
            <label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
            <input 
                type="radio"
                id="9:30 - 10:30"
                name="time-slot"
                value="1"
                onClick={(e) => {setTimeSlot(e.target.value)}}
                required        
            />
            <label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
            <input 
                type="radio"
                id="10:30 - 11:30"
                name="time-slot"
                value="2"
                onClick={(e) => {setTimeSlot(e.target.value)}}
                required        
            />
            <label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
            <input 
                type="radio"
                id="11:30 - 12:30"
                name="time-slot"
                value="3"
                onClick={(e) => {setTimeSlot(e.target.value)}}
                required        
            />
            <label htmlFor="12:30 - 1:30">12:30 - 1:30</label>
            <input 
                type="radio"
                id="12:30 - 1:30"
                name="time-slot"
                value="4"
                onClick={(e) => {setTimeSlot(e.target.value)}}
                required        
            />
            <label htmlFor="1:30 - 2:30">1:30 - 2:30</label>
            <input 
                type="radio"
                id="1:30 - 2:30"
                name="time-slot"
                value="5"
                onClick={(e) => {setTimeSlot(e.target.value)}}
                required        
            />
            <label htmlFor="2:30 - 3:30">2:30 - 3:30</label>
            <input 
                type="radio"
                id="2:30 - 3:30"
                name="time-slot"
                value="6"
                onClick={(e) => {setTimeSlot(e.target.value)}}
                required        
            />
        </section>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEventPage