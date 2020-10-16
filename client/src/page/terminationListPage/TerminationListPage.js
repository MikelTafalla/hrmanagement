import React from "react";
import FormListHeader from "../../components/header/FormListHeader";
import TerminationList from "../../components/terminationList/TerminationList";
import { Container } from "semantic-ui-react";

function TerminationListReport() {

  return (
    <div><FormListHeader />
      <Container>
        <div>

          <br></br>
          <TerminationList />

        </div>
      </Container>
    </div>
  );
}
export default TerminationListReport;