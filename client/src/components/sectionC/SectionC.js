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
            <select className="ten wide column border" onChange={(e) => props.handleCurrentClassification(e.target.value)}>
              {props.country && props.country !== "Australia" ?
                <option value="null">N/A</option> : (!props.city && props.agrCurrentUnique[0] === props.agrcurrentInDB ?
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
            <select className="ten wide column border" onChange={(e) => props.handleProposedClassification(e.target.value)}>
              {props.country && props.country !== "Australia" ?
                <option value="null">N/A</option> : (!props.city && props.agrProposedUnique[0] === props.agrProposedInDB ?
                  props.agrProposedUnique.map(agr => (
                    <option value={`${agr}`} key={agr} >{agr}</option>
                  )) :
                  props.proposedAgreement.map(agr => (
                    <option value={`${agr.value}`} key={agr.id} >{agr.name}</option>
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
            <select className="ten wide column border" >

              {props.country && props.country !== "Australia" ?
                <option value="null">N/A</option> : (!props.city &&props.currentClassification.length === 0 ?
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
            <select className="ten wide column border" >
              {props.country && props.country !== "Australia" ?
                <option value="null">N/A</option> : (!props.city && props.proposedClassification.length === 0 ?
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
            defaultValue={props.team_leader_allowance}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Leading Hand Allowance:</div>
          <input
            type="text"
            placeholder="Leading Hand Allowance"
            defaultValue={props.leading_hand_allowance}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Dual Trade Allowance:</div>
          <input
            type="text"
            placeholder="Dual Trade Allowance"
            defaultValue={props.dual_trade_allowance}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Other Allowances:</div>
          <input
            type="text"
            placeholder="Dual Trade Allowance"
            defaultValue={props.other_allowances_C}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Work Schedule:</div>
          <div className="five wide column">
            <select value={!props.renderWorkSchedule ? props.work_schedule : props.renderWorkSchedule} onChange={(e) => props.handleWorkSchedule(e.target.value)}>
              <option value="Day">Day</option>
              <option value="Shift">Shift</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Shift:</div>
          <div className="five wide column">
            <select>
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
          <input className="five wide column border" defaultValue={props && props.hours_per_day_C ? props.hours_per_day_C.monday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Tuesday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_C ? props.hours_per_day_C.tuesday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Wednesday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_C ? props.hours_per_day_C.wednesday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Thursday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_C ? props.hours_per_day_C.thursday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Friday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_C ? props.hours_per_day_C.friday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Saturday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_C ? props.hours_per_day_C.saturday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Sunday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_C ? props.hours_per_day_C.sunday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">
            <h3>Total Hours Per Week</h3>
          </div>
          <input
            className="two wide column border"
            defaultValue={props.total_hours_C}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
