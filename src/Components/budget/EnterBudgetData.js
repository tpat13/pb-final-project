import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnterBudgetData = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`submitted: ${name} - ${phone}`);
  };
  
  return (
    <div>
       <Link to="/">View Budget</Link> 
    <h2>Add Number</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type"
        onChange={({ target }) => setName(target.value)}
      /><br />
      <input
        type="text"
        placeholder="Budget Amount"
        onChange={({ target }) => setPhone(target.value)}
      /><br />

      
      
      <button type="submit">
        Add Budget 
      </button>
    </form>
    </div>
  )
};
export default EnterBudgetData;