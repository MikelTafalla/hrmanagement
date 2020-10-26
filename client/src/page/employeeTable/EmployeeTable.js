import React, { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import DepartmentHeader from "../../components/header/DepartmentHeader";
import API from "../../utils/API"
import { Container } from "semantic-ui-react";


const EmployeeDirectory = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const role = JSON.parse(localStorage.getItem("ActiveLoggedInUser"));

    loadTable();
    getRole(role);
  }, []);

  const loadTable = () => {
    API.findAll()
      .then(results => setInfo(results.data))
      .catch(err => console.log(err))
  };

  const getRole = (role) => {
    API.findRole(role)
      .then(response => {
        console.log(response)
        localStorage.setItem("Role", JSON.stringify(response.data[0].role))
      })
      .catch(err => console.log(err))
  };

//Create a Key to clean localstorage on browser close
localStorage.setItem("key", "key")
const email = JSON.parse(localStorage.getItem("ActiveLoggedInUser"))
  return (
    !email ? window.location = "/" : (
    <div>
      <DepartmentHeader />
      <Container>
        <div>

          <br></br>
          <Table
            name={info.employee_name}
            employeeId={info.employeeId}
            db={info}
          />
        </div>
      </Container>
    </div> )
  );
};

export default EmployeeDirectory;
