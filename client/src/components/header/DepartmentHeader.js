import React from "react";
import {Header} from 'semantic-ui-react';
import "./DepartmentStyle.css";


function DepartmentHeader() {
    return (




        <div id='head' className='ui sixteen wide column padded' >
            <br></br>
            <div id='h3'><Header as='h3'textAlign='center'>WelcomeTo</Header></div>
            <div id='h1head'><Header as='h1' color='violet' textAlign='center'>HR Operations</Header></div>
        </div>
        )




};

export default DepartmentHeader;