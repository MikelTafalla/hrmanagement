import React from "react";
import Countries from "../sectionA/countries.json";
import Functions from "../sectionA/functions.json";

const Termination = (props) => {
  
  return (
    <React.Fragment>
      <div className="ui equal width padded grid container">

        <div className="sixteen wide grey column">Separation Form</div>

        <div className="row">
          <div className="five wide column">Employee Name</div>
          <input type="text" name="employee_name" value={props.employee_name} className="ten wide column border" onChange={(e) => props.handleInputChange(e)} />
        </div>

        <div className="row">
          <div className="five wide column">Work Country</div>
          <div className="five wide column">
            <select name="work_country" value={props.work_country} onChange={(e) => props.handleDropdown(e)} >
              {Countries.map(country => (
                <option key={country.name} value={`${country.value}`}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="two wide column">Location</div>
          <div className="four wide column">
            <select name="location" onChange={(e) => { props.handleDropdown(e); props.manageClassifications(e) }}>
              {props.unique.map(location => (
                <option key={location} value={`${location}`}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Function</div>
          <div className="ten wide column">
            <select name="function" value={props.function} onChange={(e) => props.handleDropdown(e)}>
              {Functions.map(funct => (
                <option value={`${funct.value}`} key={funct.name}>{funct.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Separation Type
          </div>
          <div className="five wide column">
            <select name="separationType" value={props.separationType} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="termination">Termination</option>
              <option value="resignation">Resignation</option>
              <option value="redundancy">Redundancy</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Reason for Separation
          </div>
          <div className="five wide column">
            <select name="reasonSeparation" value={props.reasonSeparation} onChange={(e) => props.handleDropdown(e)}>
            {props.displayReasons.map(reason => (
                <option value={`${reason}`} key={reason}>{reason}</option>
              ))}
            </select>
          </div>
        </div>

       </div>

    </React.Fragment>
  )
};

export default Termination;
