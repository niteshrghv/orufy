import React, { useState } from 'react';

function CheckboxGroupExample() {
  const [options, setOptions] = useState([
    { id: 1, label: "Option 1", checked: false },
    { id: 2, label: "Option 2", checked: false },
    { id: 3, label: "Option 3", checked: false }
  ]);

  function handleCheckboxChange(id) {
    const updatedOptions = options.map(option => {
      if (option.id === id) {
        option.checked = true;
      } else {
        option.checked = false;
      }
      return option;
    });
    setOptions(updatedOptions);
  }

  return (
    <div>
      {options.map(option => (
        <label key={option.id}>
          <input
            type="checkbox"
            checked={option.checked}
            onChange={() => handleCheckboxChange(option.id)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroupExample;