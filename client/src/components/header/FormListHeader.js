import React from "react";
import {
    Header,
} from 'semantic-ui-react'
import "./formheader.css"


function FormHeader(props) {
      
    return (

        <div id='head' className='ui sixteen wide column padded' >
            <br></br>
            <div id='h1'><Header as='h1' inverted textAlign='center'>{props.title}<span className='name'>{props.name}</span></Header></div>

        </div>

    )




};

export default FormHeader;