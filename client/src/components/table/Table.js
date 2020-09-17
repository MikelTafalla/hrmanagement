import React from "react";
import { Link } from "react-router-dom"


const Table = props => {
  //Stores employeeId onlocalStorage from employeedirectory to use it on formlistpage 
  const storeEmpId = (id, name) => {
    localStorage.setItem("EmployeeId", JSON.stringify(id));
    localStorage.setItem("EmployeeName", JSON.stringify(name))
  }

  //Avoid duplicates in our employee directory

  let EmployeesArr = []
  props.db.map(item =>{
    EmployeesArr.push({employeeId: item.employeeId, employee_name:item.employee_name})
    return EmployeesArr
  })

  const removeDuplicates = (originalArray, id) => {
    let newArray = [];
    let object = {};
    
    for(var i in originalArray) {
      object[originalArray[i][id]] = originalArray[i]
    }
    for(i in object) {
      newArray.push(object[i]);
    }
    return newArray
  }
  const uniqueDirectory = removeDuplicates(EmployeesArr, "employeeId")
  console.log(uniqueDirectory)

  return (
    <div className='six wide column'><Link to="newchangeform"><button className='ui violet button large'>Create A New Hire</button></Link>
    <table className="ui celled table">
      <thead>
        <tr><th>Name</th>
          <th>ID</th>
          <th>History Reports</th>
        </tr></thead>
      <tbody>
        {uniqueDirectory.map(item => (
          <tr key={item.employeeId}>
            <td data-label="Name">{item.employee_name}</td>
            <td data-label="ID">{item.employeeId}</td>
            <td><Link to="formlistpage"><button type="submit" value={item.employeeId, item.employee_name}
              onClick={(e) => storeEmpId(item.employeeId, item.employee_name)}>Go to Forms</button></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
};

export default Table;
