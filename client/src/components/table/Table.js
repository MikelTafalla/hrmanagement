import React from "react";
import { Link } from "react-router-dom"


const Table = props => {


  return (
    <div className='six wide column'><Link to="newchangeform"><button className='ui violet button large'>Create A New Hire</button></Link>
    <table className="ui celled table">
      <thead>
        <tr><th>Name</th>
          <th>ID</th>
          <th>HIstory Reports</th>
        </tr></thead>
      <tbody>
        {props.db.map(item => (
          <tr key={item.employeeId}>
            <td data-label="Name">{item.employee_name}</td>
            <td data-label="ID">{item.employeeId}</td>
            <td><Link to="formlistpage"><button type="submit" value={item.employeeId}
              onClick={(e) => props.storeId(e)}>Go to Forms</button></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
};

export default Table;
