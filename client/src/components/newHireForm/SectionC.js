import React from "react";

function SectionCNewHire(props) {

  return (
    <div>
      <div className="ui padded grid container">
        <div className="sixteen wide fluid centered teal column">
          {props.sectionC}
        </div>

        <div className="row">
          <div className="five wide column">Base Wage Rate Per Hour</div>
          <input type="text" name="baseWage" className="ten wide column border" value={props.baseWage} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Employment Agreement:</div>
            <div className="ten wide column">Current:  <select name="employeeAgreement" onChange={(e) => props.handleDropdown(e)}>
              {props.work_country === "Australia" ?
                  props.agrDisplay.map(agr => (
                    <option value={`${agr}`} key={agr} >{agr}</option>
                  ))
                  :
                  <option value="null" key="null" >Agreement available only in Australia</option> }
            </select> </div> 
        </div> 

        <div className="row">
          <div className="five wide column">Classification</div>
          <input type="text" name="classification" className="ten wide column border" value={props.classification} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <label className="five wide column">	Other Allowances (Please Specify)
			    </label>
          <textarea type="text" className="nine wide column" name="otherAllowancesC" value={props.otherAllowancesC} onChange={(e) => props.handleInputChange(e)} />
        </div>

        <div className="row">
          <div className="five wide column">Team Leader Allowance</div>
          <input type="checkbox" name="leaderAllowance" checked={props.leaderAllowance} onChange={(e) => props.handleCheckbox(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Leading Hand Allowance</div>
          <input type="checkbox" name="handAllowance" checked={props.handAllowance} onChange={(e) => props.handleCheckbox(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Dual Trade Allowance</div>
          <input type="checkbox" name="tradeAllowance" checked={props.tradeAllowance} onChange={(e) => props.handleCheckbox(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Shift Type</div>
          <select name="shiftType" value={props.shiftType} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="day">Day</option>
              <option value="shift">Shift</option>
            </select>
        </div>

        <div className="row">
          <div className="five wide column">Previous Incumbent if known</div>
          <input type="text" name="previousIncumbentC" className="ten wide column border" value={props.previousIncumbentC} onChange={(e) => props.handleInputChange(e)}></input>
        </div>

      </div>
    </div>
  );
}

export default SectionCNewHire;
