import React from "react";
import FormListHeader from "../../components/header/FormListHeader";
import NewHireList from "../../components/newHireList/NewHireList";
import { Container } from "semantic-ui-react";

function NewHireListReport() {
//get Name from localStorage 
const name = JSON.parse(localStorage.getItem("EmployeeName"));

const email = JSON.parse(localStorage.getItem("ActiveLoggedInUser"))
return (
  !email ? window.location = "/" : (
  <div><FormListHeader 
  title= "New Hire Report for "
  name = {name}
  />
      <Container>
        <div>

          <br></br>
          <NewHireList />

        </div>
      </Container>
    </div> )
  );
}
export default NewHireListReport;