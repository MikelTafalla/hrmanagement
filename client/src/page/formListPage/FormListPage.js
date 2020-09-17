import React from "react";
import FormListHeader from "../../components/header/FormListHeader";
import FormList from "../../components/formList/FormList";

function FormHeader(props) {
  const activeEmployee = props.activeEmployee
    return (
      <div>
        <FormListHeader />
        <br></br>
        <FormList 
        activeEmployee = {activeEmployee}
        />
    
      </div>
    );
  }
  export default FormHeader;