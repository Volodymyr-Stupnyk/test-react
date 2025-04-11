import React, { useState } from 'react';

const SelectCoffeeSize = ({checked, onChange}) => {
    
  
    const handleSizeChange = (evt) => {
        onChange(evt.target.value);
    };
  
    return (
      <>
        <h1>Select coffee size</h1>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={checked}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={checked}
            onChange={handleSizeChange}
          />
          Meduim
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={checked}
            onChange={handleSizeChange}
          />
          Large
        </label>
      </>
    );
};
  
export default SelectCoffeeSize;