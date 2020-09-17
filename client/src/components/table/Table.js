import React from "react";
import { Link } from "react-router-dom"


const Table = props => {


  return (
    <table className="ui celled table">
      <thead>
        <tr><th>Name</th>
          <th>ID</th>
          <th>HIstory Reports</th>
        </tr></thead>
      <tbody>
        {console.log(props.db)}
        {props.db.map(item => (
          <tr key={item.employeeId}>
            <td data-label="Name">{item.employee_name}</td>
            <td data-label="ID">{item.employeeId}</td>
            <td><Link to="formlistpage"><button type="submit" value={item.employeeId}
              onClick={() => console.log("Clicked")}>Go to Forms</button></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default Table;
