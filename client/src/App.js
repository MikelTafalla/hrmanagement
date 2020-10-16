import React from "react";
import "./App.css";
import EmployeeChangeForm from "./page/employeeChangeForm/EmployeeChangeForm";
// import DepartmentValidationForm from "./page/departmentValidationForm/DepartmentValidationForm";
import FormListPage from "./page/formListPage/FormListPage";
import EmployeeDirectory from "./page/employeeTable/EmployeeTable";
import ExistingEmpNewForm from "./page/existingEmpNewForm/ExistingEmpNewForm";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import newChangeForm from "./page/newChangeForm/newChangeForm";
import SignUp from "./components/registerUser/SignUp";
import Login from "./components/registerUser/LogIn";
import SeparationForm from "./page/separationForm/SeparationForm";
import TerminationListPage from "./page/terminationListPage/TerminationListPage";



function App() {

  return (
    <Router>
      <Switch>

        {/* <Route path="/" exact component={DepartmentValidationForm} /> */}
        <Route path="/" exact component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="/employeedirectory" component={EmployeeDirectory} />
        <Route path="/formlistpage" component={FormListPage} />
        <Route path="/employeechangeForm" component={EmployeeChangeForm} />
        <Route path="/newchangeform" component={newChangeForm} />
        <Route path="/existingemployeenewform" component={ExistingEmpNewForm} />
        <Route path="/separationform" component={SeparationForm} />
        <Route path="/terminationlistpage" component={TerminationListPage} />

      </Switch>
    </Router>
  );
}

export default App;
