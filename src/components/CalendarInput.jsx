import React from 'react';

function CalendarInput(props) {
  const { name, value, onChange } = props;
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default CalendarInput;
