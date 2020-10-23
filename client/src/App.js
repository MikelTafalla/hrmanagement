import React from "react";
import "./App.css";
import EmployeeChangeForm from "./page/employeeChangeForm/EmployeeChangeForm";
import SelectFormType from "./page/selectFormType/SelectFormType";
import FormListPage from "./page/formListPage/FormListPage";
import EmployeeDirectory from "./page/employeeTable/EmployeeTable";
import ExistingEmpNewForm from "./page/existingEmpNewForm/ExistingEmpNewForm";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from "./components/registerUser/SignUp";
import Login from "./components/registerUser/LogIn";
import SeparationForm from "./page/separationForm/SeparationForm";
import TerminationListPage from "./page/terminationListPage/TerminationListPage";
import ExistingSeparationForm from "./page/existingSeparationForm/ExistingSeparationForm";
import NewHireForm from "./page/newHirePage/NewHirePage.js";
import NewHireFormContinue from "./page/newHireContinuePage/NewHireContinuePage";
import NewHireListPage from "./page/newHireListPage/NewHireListPage";



function App() {

  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="/employeedirectory" component={EmployeeDirectory} />
        <Route path="/formtypes" component={SelectFormType} />
        <Route path="/formlistpage" component={FormListPage} />
        <Route path="/employeechangeForm" component={EmployeeChangeForm} />
        <Route path="/existingemployeenewform" component={ExistingEmpNewForm} />
        <Route path="/separationform" component={SeparationForm} />
        <Route path="/terminationlistpage" component={TerminationListPage} />
        <Route path="/existingseparationform" component={ExistingSeparationForm} />
        <Route path="/newhireform" component={NewHireForm} />
        <Route path="/newhirecontinue" component={NewHireFormContinue} />
        <Route path="/newhirelistpage" component={NewHireListPage} />

      </Switch>
    </Router>
  );
}

export default App;
