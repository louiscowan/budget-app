import React, { useEffect, useState } from "react";
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'


function Form () {

    const clientCollectionRef =  collection(db, "budgeting-times")

    const [ dayValue, setDayValue ] = useState()
    const [ timeSlot, setTimeSlot ] = useState()
    const [ contactNumber, setContactNumber ] = useState()
    const [ clientName, setClientName ] = useState()
    const [ extraInfo, setExtraInfo ] = useState()

    const createBudgetingTime = async (e) => {
        e.preventDefault()
        await addDoc(clientCollectionRef, {
            dayValue: dayValue, 
            timeSlot: timeSlot, 
            contactNumber: contactNumber, 
            clientName: clientName, 
            extraInfo: extraInfo, 
        })
      }


    return(
        <div>
            <form onSubmit={createBudgetingTime}>
                <section>
                    <h3>Day</h3>
                    <label htmlFor="monday">Monday</label>
                    <input 
                        id="monday"
                        type="radio" 
                        required
                        value="monday"
                        name="date"
                        onClick={(e) => {setDayValue(e.target.value)}}
                    />
                    <label htmlFor="tuesday">Tuesday</label>
                    <input 
                        id="tuesday"
                        type="radio" 
                        required
                        value="tuesday"
                        name="date"
                        onClick={(e) => {setDayValue(e.target.value)}}
                    />
                    <label htmlFor="wednesday">Wednesday</label>
                    <input 
                        id="wednesday"
                        type="radio" 
                        required
                        value="wednesday"
                        name="date"
                        onClick={(e) => {setDayValue(e.target.value)}}
                    />
                    <label htmlFor="thursday">Thursday</label>
                    <input 
                        id="thursday"
                        type="radio" 
                        required
                        value="thursday"
                        name="date"
                        onClick={(e) => {setDayValue(e.target.value)}}
                    />
                    <label htmlFor="friday">Friday</label>
                    <input 
                        id="friday"
                        type="radio" 
                        required
                        value="friday"
                        name="date"
                        onClick={(e) => {setDayValue(e.target.value)}}
                    />
                </section>
                <section>
                    <h3>Time Slot</h3>
                    <label htmlFor="9:30 - 10:30">9:30 - 10:30</label>
                    <input 
                        type="radio"
                        id="9:30 - 10:30"
                        name="time-slot"
                        value="9:30 - 10:30"
                        onClick={(e) => {setTimeSlot(e.target.value)}}
                        required        
                    />
                    <label htmlFor="10:30 - 11:30">10:30 - 11:30</label>
                    <input 
                        type="radio"
                        id="10:30 - 11:30"
                        name="time-slot"
                        value="10:30 - 11:30"
                        onClick={(e) => {setTimeSlot(e.target.value)}}
                        required        
                    />
                    <label htmlFor="11:30 - 12:30">11:30 - 12:30</label>
                    <input 
                        type="radio"
                        id="11:30 - 12:30"
                        name="time-slot"
                        value="11:30  - 12:30"
                        onClick={(e) => {setTimeSlot(e.target.value)}}
                        required        
                    />
                    <label htmlFor="12:30 - 1:30">12:30 - 1:30</label>
                    <input 
                        type="radio"
                        id="12:30 -  1:30"
                        name="time-slot"
                        value="12:30 -  1:30"
                        onClick={(e) => {setTimeSlot(e.target.value)}}
                        required        
                    />
                    <label htmlFor="1:30 - 2:30">1:30 - 2:30</label>
                    <input 
                        type="radio"
                        id="1:30 - 2:30"
                        name="time-slot"
                        value="1:30 - 2:30"
                        onClick={(e) => {setTimeSlot(e.target.value)}}
                        required        
                    />
                    <label htmlFor="2:30 - 3:30">2:30 - 3:30</label>
                    <input 
                        type="radio"
                        id="2:30 - 3:30"
                        name="time-slot"
                        value="2:30 - 3:30"
                        onClick={(e) => {setTimeSlot(e.target.value)}}
                        required        
                    />
                </section>
                <section>
                    <h3>Information about client</h3>
                    <label htmlFor="client-name">Client Name</label>
                    <input 
                        type="text" 
                        id="client-name"
                        onChange={e => setClientName(e.target.value)}
                    />
                    <label htmlFor="contact-number">Contact Number</label>
                    <input 
                        id="contact-number"
                        type="number" 
                        onChange={e => setContactNumber(e.target.value)}
                    />
                    <label htmlFor="extra-info">Extra Info</label>
                    <input 
                        type="text" 
                        id="extra-info"
                        onChange={e => setExtraInfo(e.target.value)}
                    />
                </section>
                <button>submit</button>
             </form>
        </div>
    )
}

export default Form