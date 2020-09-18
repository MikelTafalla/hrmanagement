import React from "react";
import "./SectionA.css";
import TypeOfChange from "./typeOfChange.json";
import Functions from "./functions.json";
import Countries from "./countries.json";

const SectionA = (props) => {

  const newPositionDisplay = () => {
    if (props.position === "new position") {
      return <div className="five wide column warning">DO NOT PROCEED. Please contact HR central to arrange a Job Evaluation</div>
    } else if (!props.position) {
      return ""
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
          {props.position && props.position === "existing position" ?
            <React.Fragment>
              <div className="two wide column">Name of previous Incumbent</div>
              <input className="five wide column border" name="incumbent" value={props.incumbent} onChange={(e) => props.handleInputChange(e)}></input>
            </React.Fragment>
            : newPositionDisplay()}

        </div>

        <div className="row">
          <div className="five wide column">Employee Name</div>
          <input type="text" name="employee_name" value={props.employee_name} className="ten wide column border" onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="row">
          <div className="five wide column">Employee ID</div>
          <input type="text" name="employeeId" className="ten wide column border" value={props.employeeId} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Type of Change</div>
          <div className="ten wide column">
            <select name="typeOfChange" value={props.typeOfChange} onChange={(e) => props.handleDropdown(e)}>
              {TypeOfChange.map(type => (
                <option value={`${type.value}`} key={type.name}>{type.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Reason for Change</div>
          <input type="text" name="change_reasons" className="ten wide column border" value={props.change_reasons} onChange={(e) => props.handleInputChange(e)}></input>
        </div>
        {/* Because of nested objects, we need a ternary statement to render them */}
        <div className="row">
          <div className="five wide column">Effective Date</div>
          <div className="one wide column">Day</div>

          <input type="text" name="effective_day" className="two wide column border" placeholder="DD" value={props.effective_day} onChange={(e) => props.handleInputChange(e)} ></input>

          <div className="one wide column">Month</div>

          <input type="text" name="effective_month" className="two wide column border" placeholder="MM" value={props.effective_month} onChange={(e) => props.handleInputChange(e)}></input>

          <div className="one wide column">Year</div>

          <input type="text" name="effective_year" className="two wide column border" placeholder="YYYY" value={props.effective_year} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="grey row">
          <div className="five wide column">Not Required</div>
          <div className="one wide column">Day</div>
          <input type="text" className="two wide column border" placeholder="DD"></input>
          <div className="one wide column">Month</div>
          <input type="text" className="two wide column border" placeholder="MM"></input>
          <div className="one wide column">Year</div>
          <input type="text" className="two wide column border" placeholder="YYYY"></input>
        </div>

        <div className="row">
          <div className="five wide column">Current Position Title</div>
          <input type="text" name="current_title" className="ten wide column border" value={props.current_title} onChange={(e) => props.handleInputChange(e)} ></input>
        </div>

        <div className="row">
          <div className="five wide column">New Position Title</div>
          <input type="text" name="new_title" className="ten wide column border" value={props.new_title} onChange={(e) => props.handleInputChange(e)}></input>
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

export default SectionA;
