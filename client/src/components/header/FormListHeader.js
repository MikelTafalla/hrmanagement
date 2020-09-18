import React from "react";
import {
    Header,
} from 'semantic-ui-react'
import "./formheader.css"


function FormHeader() {

    //get Name from localStorage 
    const name = JSON.parse(localStorage.getItem("EmployeeName"))
    
    return (


        <div id='head' className='ui sixteen wide column padded' >
            <br></br>
            <div id='h1'><Header as='h1' inverted textAlign='center'>History Report for <span className='name'>{name}</span> </Header></div>

        </div>

    )




};

export default FormHeader;