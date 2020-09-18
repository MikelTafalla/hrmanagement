import React from "react";
import FormListHeader from "../../components/header/FormListHeader";
import FormList from "../../components/formList/FormList";
import { Container } from "semantic-ui-react";

function FormHeader() {

  return (
    <div><FormListHeader />
      <Container>
        <div>

          <br></br>
          <FormList />

        </div>
      </Container>
    </div>
  );
}
export default FormHeader;