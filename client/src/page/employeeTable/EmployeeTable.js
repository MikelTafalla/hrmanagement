import React, { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import DepartmentHeader from "../../components/header/DepartmentHeader"
import API from "../../utils/API"


const EmployeeDirectory = () => {
  const [info, setInfo] = useState([]);
  // const [forms, setForms] = useState();

  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    API.findAll()
      .then(results => setInfo(results.data))
      .catch(err => console.log(err))
  };

  // const goToForms = (e) => {
  //   console.log("You have Clicked!!!")
  //   const link = "https://localhost3000/newchangeform"
  //   setForms(link);
  // }



  return (
    <div>
      <DepartmentHeader />
      <Table
        name={info.employee_name}
        employeeId={info.employeeId}
        db={info}
      />
    </div>
  );
};

export default EmployeeDirectory;
