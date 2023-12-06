import React, { useState } from 'react';
import PlayerComponent1 from './API_basic';

const Picker = () => {
  // State to store the selected values
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');

 
  const handleSelectChange = (a, setterFunction) => {
    const value = a.target.value;
    setterFunction(value === '1' ? '1' : '0');
  };

  return (
    <div>
      <h2>Who is the Father of India?</h2>
      <select value={selectedValue} onChange={(a) => handleSelectChange(a, setSelectedValue)}>
        <option value="">Select an option</option>
        <option value="1">M.K GANDHI</option>
        <option value="0">NEHRU</option>
        <option value="0">PATEL</option>
        <option value="0">TAGORE</option>
      </select>
      <h2>Pink City </h2>
      <select value={selectedValue1} onChange={(a) => handleSelectChange(a, setSelectedValue1)}>
        <option value="">Select an option</option>
        <option value="1">Jaipur</option>
        <option value="0">NEHRU</option>
        <option value="0">PATEL</option>
        <option value="0">TAGORE</option>
      </select>

      {/* Display the selected values */}
      {(selectedValue1 && selectedValue) && (
        <p>
          Total Marks: {Number(selectedValue) + Number(selectedValue1)}<PlayerComponent1/>
        </p>
      )
    }
    </div>
    
  );
};

export default Picker;