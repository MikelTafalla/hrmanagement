import React from "react";
import FormListHeader from "../../components/header/FormListHeader";
import FormType from "../../components/formType/FormType";


function SelectForm() {
    //get Name from localStorage 
    const name = JSON.parse(localStorage.getItem("EmployeeName"));
    
    const email = JSON.parse(localStorage.getItem("ActiveLoggedInUser"))
    return (
      !email ? window.location = "/" : (
      <div><FormListHeader 
      title= "Select the Type of Form for "
      name = {name}
      />

        <br></br>
        <br></br>
        <br></br>
       
        <FormType />

       
      </div> )
    );
  }
  export default SelectForm;