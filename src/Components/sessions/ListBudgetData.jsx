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
            <th>Type</th>
            <th>Budget Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foo Bar</td>
            <td>999888777</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
};
export default ListBudgetData;