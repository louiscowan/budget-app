import React, { useState } from 'react';
import CalendarInput from './CalendarInput';

function CalendarDay(props) {
  const { date, eventValues } = props;
  const inputNames = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6']; // Array of input names
  const times = ['9:30-10:30', '10:30-11:30', '11:30-12:30', '12:30-1:30', '1:30-2:30', '2:30-3:30']; // Array of times

  const [inputData, setInputData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: ''
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputData(prevInputData => ({
      ...prevInputData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dataToSend = {
      date: date,
      inputValues: inputData
    };
    console.log('Data to send:', dataToSend); // Replace with API call to send data to backend
  }

  return (
    <div>
      <span className="time-column">
        {times.map(time => (
          <div key={time}>{time}</div>
        ))}
      </span>
      <span className="input-column">
        {inputNames.map((name, index) => (
          <form key={name} onSubmit={handleSubmit}>
            <CalendarInput
              name={name}
              value={inputData[name]}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        ))}
      </span>
    </div>
  );
}

export default CalendarDay;
