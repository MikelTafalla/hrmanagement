import React, { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import DepartmentHeader from "../../components/header/DepartmentHeader"
import API from "../../utils/API"
import { Container } from "semantic-ui-react";

const EmployeeDirectory = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    API.findAll()
      .then(results => setInfo(results.data))
      .catch(err => console.log(err))
  };

  return (

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
    </div>
  );
};

export default EmployeeDirectory;
