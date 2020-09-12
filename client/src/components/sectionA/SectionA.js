import React, { useState } from "react";
import "./SectionA.css";
import TypeOfChange from "./typeOfChange.json";
import Functions from "./functions.json";
import Countries from "./countries.json";

const SectionA = (props) => {
  const [activeLocation, setActiveLocation] = useState([]);
  const [activePosition, setActivePosition] = useState("");
  const[position, setPosition] = useState("");
  const[employeeClass, setEmployeeClass] = useState("");
  const[typeOfChange, setTypeOfChange] = useState("");
  const[country, setCountry] = useState("");
  const[activeFunction, setActiveFunction] = useState("");
  const[businessUnit, setBusinessUnit] = useState("");
  
  ///Logic to get dropdown list display the location from the database as selected on page load
  const citiesToDisplay = []
  let cities = []
  const place = !country ? props.work_country : country
  for (let i = 1; i < Countries.length; i++){
    if (place === Countries[i].name){
    cities = Countries[i].cities
    }
  }
  for(let j = 0; j < cities.length; j++){
    if(props.location === cities[j]){
      citiesToDisplay.unshift(cities[j])
    }
    citiesToDisplay.push(cities[j])
  }
  const unique = [...new Set(citiesToDisplay)]
// Finish Logic

  const handleLocation = (selectedCountry) => {
    setCountry(selectedCountry)
    
    for (let i = 0; i < Countries.length; i++) {
      if (selectedCountry === Countries[i].value) {
        return setActiveLocation(Countries[i].cities)
      }
    }
  }
  
  const handlePosition = (selectedPosition) => {

    if(selectedPosition === props.position){
      setPosition(position)
    } else setPosition(selectedPosition)
    
    if (selectedPosition === "new Position") {
      return setActivePosition(
        <div className="five wide column warning">DO NOT PROCEED. Please contact HR central to arrange a Job Evaluation</div>
      )
    }
    if (selectedPosition === "existing Position") {
      return setActivePosition(
        <React.Fragment>
          <div className="two wide column">Name of previous Incumbent</div>
          <input className="five wide column border" defaultValue={props.incumbent}></input>
        </React.Fragment>
      )
    }
  }

  const handleEmployeeClassification = (selectedValue) => {
    setEmployeeClass(selectedValue)
  }

  const handleTypeOfChange = (selectedValue) => {
   setTypeOfChange(selectedValue)
  }

  const handleFunction = (selectedValue) => {
    setActiveFunction(selectedValue)
  }

  const handleBusinessUnit = (selectedValue) => {
    setBusinessUnit(selectedValue)
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
            <select>
              <option value="null">Select...</option>
              <option value="salaried">Salaried</option>
              <option value="waged">Waged</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Employee Classification</div>
          <div className="five wide column">
            <select value={ !employeeClass ? props.employee_classification : employeeClass} onChange={(e) => handleEmployeeClassification(e.target.value)}>
              <option value="null">Select...</option>
              <option value="permanent">Permanent</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">New Position / Existing Position</div>
          <div className="three wide column">
            <select value={ !position ? props.position : position} onChange={(e) => handlePosition(e.target.value)}>
              <option value="null">Select...</option>
              <option value="new position">New Position</option>
              <option value="existing position">Existing Position</option>
            </select>
          </div>
          {activePosition}
        </div>

        <div className="row">
          <div className="five wide column">Employee Name</div>
          <input className="ten wide column border" defaultValue={props.employee_name}></input>
        </div>
        <div className="row">
          <div className="five wide column">Employee ID</div>
          <input className="ten wide column border" defaultValue={props.employeeId}></input>
        </div>

        <div className="row">
          <div className="five wide column">Type of Change</div>
          <div className="ten wide column">
            <select value={ !typeOfChange ? props.typeOfChange : typeOfChange} onChange={(e) => handleTypeOfChange(e.target.value)}>
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
            <select value={ !country ? props.work_country : country} onChange={(e) => handleLocation(e.target.value)} >
              {Countries.map(country => (
                <option key={country.name} value={`${country.value}`}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="two wide column">Location</div>
          <div className="four wide column">                
            <select >
              {!country ?
              unique.map(location => (
                <option key={location} value={`${location}`}>{location}</option>
              )) : 
              activeLocation.map(location => (
                <option key={location} value={`${location}`}>{location}</option>
              ))
              }
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Function</div>
          <div className="ten wide column">
            <select value={ !activeFunction ? props.function : activeFunction} onChange={(e) => handleFunction(e.target.value)}>
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
            <select value={ !businessUnit ? props.business_unit : businessUnit} onChange={(e) => handleBusinessUnit(e.target.value)}>
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