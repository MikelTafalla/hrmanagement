import React from "react";
import {
    Segment,
    Header,
    Image
} from 'semantic-ui-react'


function FormHeader() {
    return (


        <Segment inverted padded='very' vertical color='violet'>
            <Image centered src={'./images/hrimage3.png'} size={'tiny'} />
            <Header as='h1' textAlign='center'>Employee Change Form List</Header>

        </Segment>

    )




};

export default FormHeader;