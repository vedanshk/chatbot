import React, { useState } from "react";
const inputStyle = {
  width: "100%",
  padding: "8px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  outline: "none",
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    marginTop : "5px"
  };

const NameInput = ({ payload: { onNameSubmit } }) => {
    const [name, setName] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onNameSubmit(name);
      setName("");
    };
  
    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={handleNameChange}
              style={inputStyle} 
            />
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
export default NameInput;
