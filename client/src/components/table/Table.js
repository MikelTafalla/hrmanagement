import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Table } from "semantic-ui-react"
import "./table.css"


const TableList = props => {
  const [searchName, setSearchName] = useState("");
  const [filteredUsers, setFilterdUsers] = useState([])

  //Stores employeeId onlocalStorage from employeedirectory to use it on formlistpage 
  const storeEmpId = (id, name) => {
    localStorage.setItem("EmployeeId", JSON.stringify(id));
    localStorage.setItem("EmployeeName", JSON.stringify(name))
  }

  //Avoid duplicates in our employee directory

  let EmployeesArr = []
  props.db.map(item => {
    EmployeesArr.push({ employeeId: item.employeeId, employee_name: item.employee_name })
    return EmployeesArr
  })

  const removeDuplicates = (originalArray, id) => {
    let newArray = [];
    let object = {};

    for (var i in originalArray) {
      object[originalArray[i][id]] = originalArray[i]
    }
    for (i in object) {
      newArray.push(object[i]);
    }
    return newArray
  }
  const uniqueDirectory = removeDuplicates(EmployeesArr, "employeeId")

  const handleChange = (e) => {
    const { value } = e.target
    setSearchName(value)
    // This if statement is for when someone hits backspace and makes input empty
    if (value === "") {
      setFilterdUsers(uniqueDirectory)
      //if start typing, we start filtering users
    } else if (value !== "") {
      const filteredUsers = uniqueDirectory.filter(data =>
        data.employee_name.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilterdUsers(filteredUsers);
    }
  };
  return (
    <div className='six wide column'><Link to="newhireform"><button className='ui violet button large'>Create A New Hire</button></Link>
      {/* Search Bar */}
      <div className="ui grid center aligned">
        <div className="sixteen wide column"></div>
        <div className="ui search searchbar">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search Employee"
              onChange={(e) => handleChange(e)}
              aria-label="Search"
              name="search"
              value={searchName}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </div>
      
      <Table id='tbl' textAlign='center' singleLine sortable>
        <thead className='thead'>
          <tr><th>Name</th>
            <th>ID</th>
            <th>History Reports</th>
          </tr></thead>

        <tbody>
          {filteredUsers.length === 0 ?
            uniqueDirectory.map(item => (
              <tr key={item.employeeId}>
                <td data-label="Name">{item.employee_name}</td>
                <td data-label="ID">{item.employeeId}</td>
                <td><Link to="formtypes"><button className='ui violet button small' type="submit" value={item.employeeId, item.employee_name}
                  onClick={(e) => storeEmpId(item.employeeId, item.employee_name)}>Go to Forms</button></Link></td>
              </tr>
            ))
            :
            filteredUsers.map(item => (
              <tr key={item.employeeId}>
                <td data-label="Name">{item.employee_name}</td>
                <td data-label="ID">{item.employeeId}</td>
                <td><Link to="formtypes"><button className='ui violet button small' type="submit" value={item.employeeId, item.employee_name}
                  onClick={(e) => storeEmpId(item.employeeId, item.employee_name)}>Go to Forms</button></Link></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
};

export default TableList;
