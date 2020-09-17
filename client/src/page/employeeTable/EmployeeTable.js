import React, { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import DepartmentHeader from "../../components/header/DepartmentHeader"
import API from "../../utils/API"


const EmployeeDirectory = (props) => {
  const [info, setInfo] = useState([]);
  

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    API.findAll()
      .then(results => setInfo(results.data))
      .catch(err => console.log(err))
  };
  
  const storeId = props.storeId

  return (
    <div>
      <DepartmentHeader />
      <br></br>
      <Table
        name={info.employee_name}
        employeeId={info.employeeId}
        db={info}
        storeId={storeId}
      />
    </div>
  );
};

export default EmployeeDirectory;
