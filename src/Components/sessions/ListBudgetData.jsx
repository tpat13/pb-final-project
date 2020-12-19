import React from 'react';
import { Link } from 'react-router-dom';
const ListBudgetData = () => {
  return (
    <div>
       <title>Personal Budget App | List Budget Data</title>
      <Link to="/enter-budget">Add Budget </Link>
      {/* <Link to="/dashboard">Dashboard (view charts)</Link>  */}

      <h2>Budget Data</h2>
    
      <table>
        <thead>
          <tr>
          <th scope="col">Type</th>
          <th scope="col">Budget Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rent</td>
            <td>350</td>
          </tr>
          <tr>
            <td>Eat out</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Groceries</td>
            <td>90</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
};
export default ListBudgetData;