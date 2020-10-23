import React from "react";
import "./SectionA.css";
import Functions from "./functions.json";
import Countries from "./countries.json";

const SectionANewHire = (props) => {

  const newPositionDisplay = () => {
    if (props.position === "new position") {
      return <div className="five wide column warning">Please complete below justification</div>
    } else if (!props.position) {
      return ""
    }
  }
  const previousIncumbent = () => {
      if (props.position === "existing position") {
          return <div className="row"><label className="five wide column">Name of previous Incumbent and Reason for leaving</label><textarea rows={3} className="textarea ten wide column border" name="previousIncumbent" value={props.previousIncumbent} onChange={(e) => props.handleInputChange(e)} /></div>
      }
  }
  return (
    <React.Fragment>
      <div className="ui equal width padded grid container">

        <div className="sixteen wide green column">{props.sectionA}</div>

        <div className="row">
          <div className="five wide column" style={{ color: "red" }}>
            Please Select Employment Type to Begin
          </div>
          <div className="five wide column">
            <select name="employee_type" value={props.employee_type} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="salaried">Salaried</option>
              <option value="waged">Waged</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="five wide column">Employee Classification</div>
          <div className="five wide column">
            <select name="employee_classification" value={props.employee_classification} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="permanent">Fixed Term Contractor</option>
              <option value="permanent">Permanent</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">New Position / Existing Position</div>
          <div className="three wide column">
            <select name="position" value={props.position} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="new position">New Position</option>
              <option value="existing position">Existing Position</option>
            </select>
          </div>
          {props.position === "existing position" ?
            <React.Fragment>
              <div className="two wide column">Existing Position Number</div>
              <input className="five wide column border" name="positionNumber" value={props.positionNumber} onChange={(e) => props.handleInputChange(e)}></input>
            </React.Fragment>
            : newPositionDisplay()}
        </div>
        {props.position === "new position" ?
            <React.Fragment>
        <div className="row">
            <label className="five wide column">Complete New Role Justification</label>
            <textarea rows={3} className="textarea ten wide column border" name="newRoleJustification" value={props.newRoleJustification} onChange={(e) => props.handleInputChange(e)} />
        </div>
        </React.Fragment> : previousIncumbent()}
        

        <div className="row">
          <div className="five wide column">Employee Name</div>
          <input type="text" placeholder="This Field is Mandatory. Please Fill In" name="employee_name" value={props.employee_name} className="ten wide column border" onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="row">
          <div className="five wide column">Employee ID</div>
          <input type="text" placeholder="This Field is Mandatory. Please Fill In" name="employeeId" className="ten wide column border" value={props.employeeId} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Position Title</div>
          <input type="text" name="title" className="ten wide column border" value={props.title} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Is there an Internal Candidate?</div>
          <select name="internalCandidate" value={props.internalCandidate} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
        </div>

        <div className="row">
          <div className="five wide column">Name of Internal Candidate</div>
          <input type="text" name="nameInternalCandidate" className="ten wide column border" value={props.nameInternalCandidate} onChange={(e) => props.handleInputChange(e)}></input>
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
            <select name="location" onChange={(e) => props.handleDropdown(e)}>
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
          <div className="five wide column">Department</div>
          <input name="department" type="text" className="ten wide column border" value={props.department} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Manager</div>
          <input type="text" name="manager" className="ten wide column border" value={props.manager} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column"></div>
          <div className="two wide column">Salary Cost Centre</div>

          <input type="text" name="salary_cost" className="three wide column border" value={props.salary_cost} onChange={(e) => props.handleInputChange(e)}></input>

          <div className="two wide column">Travel Cost Centre (if different)</div>

          <input type="text" name="travel_cost" className="three wide column border" value={props.travel_cost} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Business Unit</div>
          <div className="five wide column">
            <select name="business_unit" value={props.business_unit} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="ANZ">ANZ</option>
              <option value="Regional">Regional</option>
              <option value="Indonesia">Indonesia</option>
            </select>
          </div>
        </div>

      </div>


    </React.Fragment>
  )
};

export default SectionANewHire;
