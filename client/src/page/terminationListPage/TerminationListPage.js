import React from "react";
import FormListHeader from "../../components/header/FormListHeader";
import TerminationList from "../../components/terminationList/TerminationList";
import { Container } from "semantic-ui-react";

function TerminationListReport() {
//get Name from localStorage 
const name = JSON.parse(localStorage.getItem("EmployeeName"));

const email = JSON.parse(localStorage.getItem("ActiveLoggedInUser"))
return (
  !email ? window.location = "/" : (
  <div><FormListHeader 
  title= "Termination Report for "
  name = {name}
  />
      <Container>
        <div>

          <br></br>
          <TerminationList />

        </div>
      </Container>
    </div> )
  );
}
export default TerminationListReport;