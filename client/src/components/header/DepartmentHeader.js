import React from "react";
import { Header } from 'semantic-ui-react';
import "./DepartmentStyle.css";
import Logout from "../registerUser/LogOut"


function DepartmentHeader() {
  return (     

      <div id='head' className='ui sixteen wide column padded' >
        <Logout />
        <br></br>
        
        <div id='h3'><Header as='h2' inverted textAlign='center'>WelcomeTo</Header></div>
        <div id='header'><Header as='h1' inverted color='violet' textAlign='center'>HR Operations</Header></div>
        
      </div>

  )




};

export default DepartmentHeader;