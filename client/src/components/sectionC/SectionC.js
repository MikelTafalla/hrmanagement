import React from "react";
import Shifts from "./shift.json";


function SectionC(props) {
  
  return (
    <div>
      <div className="ui padded grid container">
        <div className="sixteen wide fluid centered teal column">
          {props.sectionC}
        </div>

        <div className="row">
          <div className="five wide column">Employment Agreement:</div>
          <div className="row">
            <div className="five wide column">Current</div>
            {console.log(props.location)}
            {console.log(props.locationDB)}
            <select name="employee_agreement_current" className="ten wide column border" onChange={(e) => props.handleCurrentClassification(e)}>
              
              {props.work_country && props.work_country !== "Australia" ?
                <option value="null">N/A</option> : (props.location && props.location === props.locationDB ?
                  props.agrCurrentUnique.map(agr => (
                    <option value={`${agr}`} key={agr} >{agr}</option>
                  )) :
                  props.currentAgreement.map(agr => (
                    <option value={`${agr.value}`} key={agr.id} >{agr.name}</option>
                  ))
                )
              }
            </select>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column">Proposed</div>
            <select name="employee_agreement_proposed" className="ten wide column border" onChange={(e) => props.handleProposedClassification(e)}>
              {props.work_country && props.work_country !== "Australia" ?
                <option value="null">N/A</option> : (props.location && props.location === props.locationDB ?
                  props.agrProposedUnique.map(agr => (
                    <option value={`${agr}`} key={agr} >{agr}</option>
                  )) :
                  props.proposedAgreement.map(agr => (
                    <option value={`${agr.value}`} key={agr} >{agr.name}</option>
                  ))
                )
              }
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Classification:</div>
          <div className="row">
            <div className="five wide column">Current</div>

            <select name="classification_current" className="ten wide column border" onChange={(e) => props.handleDropdown(e)}>
              {props.work_country && props.work_country !== "Australia" ?
                <option value="null">N/A</option> :
                (props.location && props.location === props.locationDB ?
                  props.classCurrentUnique.map(cl => (
                    <option value={`${cl}`} key={cl} >{cl}</option>)) :
                  props.currentClassification.map(current => (
                    <option value={current} key={current}>{current}</option>
                  ))
                )
              }
            </select>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column">Proposed</div>
            <select name="classification_proposed" className="ten wide column border" onChange={(e) => props.handleDropdown(e)}>
              {props.work_country && props.work_country !== "Australia" ?
                <option value="null">N/A</option> : (props.location && props.location === props.locationDB ?
                  props.classProposedUnique.map(cl => (
                    <option value={`${cl}`} key={cl} >{cl}</option>)) : 
                  props.proposedClassification.map(proposed => (
                    <option value={proposed} key={proposed}>{proposed}</option>))
                )}

            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Team Leader Allowance:</div>
          <input
            type="text"
            placeholder="Team Leader Allowance"
            name="team_leader_allowance"
            value={props.team_leader_allowance } onChange={(e)=> props.handleInputChange(e)}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Leading Hand Allowance:</div>
          <input
            type="text"
            placeholder="Leading Hand Allowance"
            name="leading_hand_allowance"
            value={props.leading_hand_allowance } onChange={(e)=> props.handleInputChange(e)}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Dual Trade Allowance:</div>
          <input
            type="text"
            placeholder="Dual Trade Allowance"
            name="dual_trade_allowance"
            value={props.dual_trade_allowance } onChange={(e)=> props.handleInputChange(e)}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Other Allowances:</div>
          <input
            type="text"
            placeholder="Dual Trade Allowance"
            name="other_allowances_C"
            value={props.other_allowances_C } onChange={(e)=> props.handleInputChange(e)}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Work Schedule:</div>
          <div className="five wide column">
            <select name="work_schedule" value={props.work_schedule } onChange={(e)=> props.handleDropdown(e)}>
              <option value="Day">Day</option>
              <option value="Shift">Shift</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Shift:</div>
          <div className="five wide column">
            <select name="shift" value={props.shift } onChange={(e)=> props.handleDropdown(e)}>
              {Shifts.map(shift => (
                <option key={shift.value} value={shift.value}>{shift.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            <h3>Work Days (Waged Employees)</h3>Tick the check box for the new
            work days
          </div>
          <div className="five wide column">
            <h3>Hours of Work</h3>Fill-in the work per day
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Monday</div>
          <input name="hoursC_monday" className="five wide column border" value={props.hoursC_monday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Tuesday</div>
          <input name="hoursC_tuesday" className="five wide column border" value={props.hoursC_tuesday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Wednesday</div>
          <input name="hoursC_wednesday" className="five wide column border" value={props.hoursC_wednesday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Thursday</div>
          <input name="hoursC_thursday" className="five wide column border" value={props.hoursC_thursday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Friday</div>
          <input name="hoursC_friday" className="five wide column border" value={props.hoursC_friday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Saturday</div>
          <input name="hoursC_saturday" className="five wide column border" value={props.hoursC_saturday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Sunday</div>
          <input name="hoursC_sunday" className="five wide column border" value={props.hoursC_sunday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">
            <h3>Total Hours Per Week</h3>
          </div>
          <input
            className="two wide column border"
            name="total_hours_C"
            value={props.total_hours_C } onChange={(e)=> props.handleInputChange(e)}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
