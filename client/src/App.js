import React, {useState} from "react";
import "./App.css";
import EmployeeChangeForm from "./page/employeeChangeForm/EmployeeChangeForm";
import DepartmentValidationForm from "./page/departmentValidationForm/DepartmentValidationForm";
import FormListPage from "./page/formListPage/FormListPage";
import EmployeeDirectory from "./page/employeeTable/EmployeeTable";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import newChangeForm from "./page/newChangeForm/newChangeForm";


function App() {
  const [activeEmployee, setActiveEmployee] = useState([])

  const storeId = (e) => {

    setActiveEmployee(e.target.value);
    console.log("Id stored")
  }

  return (
    <Router>
      <Switch>

        <Route path="/" exact component={DepartmentValidationForm} />
        <Route path="/employeedirectory" component={() => 
        <EmployeeDirectory 
          storeId = {storeId}
        />} />
        <Route path="/formlistpage" component={()=> 
        <FormListPage
          activeEmployee={activeEmployee}
        />} />
        <Route path="/employeechangeForm" component={EmployeeChangeForm} />
        <Route path="/newchangeform"
          component={newChangeForm} />

      </Switch>
    </Router>
  );
}

export default App;
