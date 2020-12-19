import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnterBudgetData = () => {
  const [title, setTitle] = useState();
  const [budget, setBudget] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`submitted: ${title} - ${budget}`);
  };
  
  return (

    <div>
       <title>Personal Budget App | Enter Budget Data</title>
       <Link to="/">View Budget</Link> 
     
      {/* <Link to="/dashboard"> Dashboard (view charts)</Link>  */}
      
    <h2>Add Number</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type"
        onChange={({ target }) => setTitle(target.value)}
      /><br />
      <input
        type="text"
        placeholder="Budget Amount"
        onChange={({ target }) => setBudget(target.value)}
      /><br />

      
      
      <button type="submit">
        Add Budget 
      </button>
    </form>
    </div>
  )
};
export default EnterBudgetData;