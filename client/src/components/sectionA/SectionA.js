import React from "react";
import "./SectionA.css";
import TypeOfChange from "./typeOfChange.json";
import Functions from "./functions.json";
import Countries from "./countries.json";

const SectionA = (props) => {

  return ( 
    <React.Fragment>
      <div className="ui equal width padded grid container">

        <div className="sixteen wide green column">{props.sectionA}</div>

        <div className="row">
          <div className="five wide column" style={{ color: "red" }}>
            Please Select Employment Type to Begin
          </div>
          <div className="five wide column">
            <select value={ !props.employeeType ? props.employee_type : props.employeeType} onChange={(e) => props.handleEmployeeType(e.target.value)}>
              <option value="null">Select...</option>
              <option value="salaried">Salaried</option>
              <option value="waged">Waged</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Employee Classification</div>
          <div className="five wide column">
            <select value={ !props.employeeClass ? props.employee_classification : props.employeeClass} onChange={(e) => props.handleEmployeeClassification(e.target.value)}>
              <option value="null">Select...</option>
              <option value="permanent">Permanent</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">New Position / Existing Position</div>
          <div className="three wide column">
            <select value={ !props.renderPosition ? props.position : props.renderPosition} onChange={(e) => props.handlePosition(e.target.value)}>
              <option value="null">Select...</option>
              <option value="new position">New Position</option>
              <option value="existing position">Existing Position</option>
            </select>
          </div>
          {props.activePosition}
        </div>

        <div className="row">
          <div className="five wide column">Employee Name</div>
          <input type="text" value={!props.inputName ? props.employee_name : props.inputName} className="ten wide column border" onChange={(e)=> props.handleInputName(e.target.value)}></input>
        </div>
        <div className="row">
          <div className="five wide column">Employee ID</div>
          <input className="ten wide column border" defaultValue={props.employeeId}></input>
        </div>

        <div className="row">
          <div className="five wide column">Type of Change</div>
          <div className="ten wide column">
            <select value={ !props.renderTypeOfChange ? props.typeOfChange : props.renderTypeOfChange} onChange={(e) => props.handleTypeOfChange(e.target.value)}>
              {TypeOfChange.map(type => (
                <option value={`${type.value}`} key={type.name}>{type.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Reason for Change</div>
          <input className="ten wide column border" defaultValue={props.change_reasons}></input>
        </div>
        {/* Because of nested objects, we need a ternary statement to render them */}
        <div className="row">
          <div className="five wide column">Effective Date</div>
          <div className="one wide column">Day</div>
          <input className="two wide column border" placeholder="DD" defaultValue={props && props.effective_date ? props.effective_date.day : null}></input>
          <div className="one wide column">Month</div>
          <input className="two wide column border" placeholder="MM" defaultValue={props && props.effective_date ? props.effective_date.month : null}></input>
          <div className="one wide column">Year</div>
          <input className="two wide column border" placeholder="YYYY" defaultValue={props && props.effective_date ? props.effective_date.year : null}></input>
        </div>

        <div className="grey row">
          <div className="five wide column">Not Required</div>
          <div className="one wide column">Day</div>
          <input className="two wide column border" placeholder="DD"></input>
          <div className="one wide column">Month</div>
          <input className="two wide column border" placeholder="MM"></input>
          <div className="one wide column">Year</div>
          <input className="two wide column border" placeholder="YYYY"></input>
        </div>

        <div className="row">
          <div className="five wide column">Current Position Title</div>
          <input className="ten wide column border" defaultValue={props.current_title}></input>
        </div>

        <div className="row">
          <div className="five wide column">New Position Title</div>
          <input className="ten wide column border" defaultValue={props.new_title}></input>
        </div>

        <div className="row">
          <div className="five wide column">Work Country</div>
          <div className="five wide column">   
            <select value={ !props.country ? props.work_country : props.country} onChange={(e) => props.handleLocation(e.target.value)} >
              {Countries.map(country => (
                <option key={country.name} value={`${country.value}`}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="two wide column">Location</div>
          <div className="four wide column">                
            <select onChange={(e) => props.handleCity(e.target.value)}>
              {!props.country ?
              props.unique.map(location => (
                <option key={location} value={`${location}`}>{location}</option>
              )) : 
              props.activeLocation.map(location => (
                <option key={location} value={`${location}`}>{location}</option>
              ))
              }
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Function</div>
          <div className="ten wide column">
            <select value={ !props.activeFunction ? props.function : props.activeFunction} onChange={(e) => props.handleFunction(e.target.value)}>
              {Functions.map(funct => (
                <option value={`${funct.value}`} key={funct.name}>{funct.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Department</div>
          <input className="ten wide column border" defaultValue={props.department}></input>
        </div>

        <div className="row">
          <div className="five wide column">Manager</div>
          <input className="ten wide column border" defaultValue={props.manager}></input>
        </div>

        <div className="row">
          <div className="five wide column"></div>
          <div className="two wide column">Salary Cost Centre</div>
          <input className="three wide column border" defaultValue={props.salary_cost}></input>
          <div className="two wide column">Travel Cost Centre (if different)</div>
          <input className="three wide column border" defaultValue={props.travel_cost}></input>
        </div>

        <div className="row">
          <div className="five wide column">Business Unit</div>
          <div className="five wide column">
            <select value={ !props.businessUnit ? props.business_unit : props.businessUnit} onChange={(e) => props.handleBusinessUnit(e.target.value)}>
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
  