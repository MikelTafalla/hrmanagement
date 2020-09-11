import React from "react";
import {
    Segment,
    Header,
    Image
} from 'semantic-ui-react'


function DepartmentHeader() {
    return (


        <Segment inverted padded='very' vertical color='violet'>
            <Image centered src={'./images/hrimage3.png'} size={'small'} />
            <Header as='h1' textAlign='center'>Welcome to the Deparment Validation Page</Header>
            <Header as='h2' textAlign='center'>Please Choose your Role</Header>

        </Segment>

    )




};

export default DepartmentHeader;