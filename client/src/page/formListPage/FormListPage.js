import React from "react";
import FormListHeader from "../../components/header/FormListHeader";
import FormList from "../../components/formList/FormList";
import { Container } from "semantic-ui-react";

function FormHeader() {
  //get Name from localStorage 
  const name = JSON.parse(localStorage.getItem("EmployeeName"));
  
  const email = JSON.parse(localStorage.getItem("ActiveLoggedInUser"))
  return (
    !email ? window.location = "/" : (
    <div><FormListHeader 
    title= "History Report for "
    name = {name}
    />
      <Container>
        <div>

          <br></br>
          <FormList />

        </div>
      </Container>
    </div> )
  );
}
export default FormHeader;