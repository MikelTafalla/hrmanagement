import React, { useState, useEffect } from "react";
import Agreement from "./agreement.json";
import Shifts from "./shift.json";
import Classification from "./classification.json";


function SectionC(props) {
  const [currentAgreement, setCurrentAgreement] = useState([]);
  const [proposedAgreement, setProposedAgreement] = useState([{}]);
  const [workSchedule, setWorkSchedule] = useState("");
  const [currentClassification, setCurrentClassification] = useState([]);
  const [proposedClassification, setProposedClassification] = useState([]);


  useEffect(() => {
    //Set only cities that have an agreement 
    const cities = ["Adelaide", "Brisbane", "Melbourne CBD", "Melbourne", "Sydney"];
    for (let i = 0; i < cities.length; i++) {
      if (props.DBlocation === cities[i] || props.city === cities[i]) {
        for (let j = 0; j < cities.length; j++) {
          if (cities[j] === props.city) {
            setCurrentAgreement(Agreement[j]);
            setProposedAgreement(Agreement[j])
          }
          if (props.city === "Melbourne CBD") {
            setCurrentClassification([]);
            setProposedClassification([])
          }
          if (props.country !== "Australia") {
            setCurrentClassification([]);
            setProposedClassification([])
          }
        }
      }
    }
  }, [props.country, props.city, props.DBlocation]);

  const handleWorkSchedule = (selectedValue) => {
    setWorkSchedule(selectedValue)
  }

  const handleCurrentClassification = (selectedValue) => {
    Classification.forEach(element => {
      const item = element.agreement
      for (var i = 0; i < item.length; i++) {
        if (selectedValue === item[i].name) {
          return setCurrentClassification(item[i].classification)
        }
      }
    });
  }

  const handleProposedClassification = (selectedValue) => {
    Classification.forEach(element => {
      const item = element.agreement
      for (var i = 0; i < item.length; i++) {
        if (selectedValue === item[i].name) {
          return setProposedClassification(item[i].classification)
        }
      }
    });
  }
  //Start with an empty array to push all the agreements that correspond to the group where the agreement from the DB belongs to
  const agrCurrentDisplay = []
  //We store the agreement from the database. Ternary needed to avoid load conflicts.
  const agrcurrentInDB = props && props.employee_agreement ? props.employee_agreement.current : []
  //Loop through the agreement JSON and store each agreement object to loop through that object on nested loop
  for (let i = 0; i < Agreement.length; i++) {
    let currentagr = Agreement[i]
    //Loop through nested array on agreement.json looking for a match to the database info
    for (let j = 0; j < currentagr.length; j++) {
      //when match is found, we push it as the first element of the array
      if (agrcurrentInDB === currentagr[j].name) {
        agrCurrentDisplay.unshift(currentagr[j].name)
      }
      else {
        agrCurrentDisplay.push(currentagr[j].name)
      }

    }
    break
  }
  const agrCurrentUnique = [...new Set(agrCurrentDisplay)]

  //end of logic
  //Repeat the logic for agreement proposed and classificatio current and proposed

  //AGREEMENT PROPOSED
  const agrProposedDisplay = []
  const agrProposedInDB = props && props.employee_agreement ? props.employee_agreement.proposed : []
  for (let i = 0; i < Agreement.length; i++) {
    let proposedagr = Agreement[i]
    for (let j = 0; j < proposedagr.length; j++) {
      if (agrProposedInDB === proposedagr[j].name) {
        agrProposedDisplay.unshift(proposedagr[j].name)
      } else {
        agrProposedDisplay.push(proposedagr[j].name)
      }
    }
    break
  }

  const agrProposedUnique = [...new Set(agrProposedDisplay)]
  //CLASSIFICATION CURRENT
  const classCurrentDisplay = []
  const classCurrentInDB = props && props.classification ? props.classification.current : []
  for (let i = 0; i < Classification.length; i++) {
    let currentClass = Classification[i].agreement
    for (let j = 0; j < currentClass.length; j++) {

      if (currentClass[j].name === agrcurrentInDB) {

        let currentClassArr = currentClass[j].classification
        for (let k = 0; k < currentClassArr.length; k++) {
          if (classCurrentInDB === currentClassArr[k]) {
            classCurrentDisplay.unshift(currentClassArr[k])
          } else {
            classCurrentDisplay.push(currentClassArr[k])
          }
        }
      }
    }
    break
  }

  const classCurrentUnique = [...new Set(classCurrentDisplay)]

  //CLASSIFICATION PROPOSED
  const classProposedDisplay = []
  const classProposedInDB = props && props.classification ? props.classification.proposed : []
  for (let i = 0; i < Classification.length; i++) {
    let proposedClass = Classification[i].agreement

    for (let j = 0; j < proposedClass.length; j++) {

      if (proposedClass[j].name === agrProposedInDB) {

        let proposedClassArr = proposedClass[j].classification
        for (let k = 0; k < proposedClassArr.length; k++) {
          if (classProposedInDB === proposedClassArr[k]) {
            classProposedDisplay.unshift(proposedClassArr[k])
          } else {
            classProposedDisplay.push(proposedClassArr[k])
          }
        }
      }
    }
    break
  }

  const classProposedUnique = [...new Set(classProposedDisplay)]

 
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
            <select className="ten wide column border" onChange={(e) => handleCurrentClassification(e.target.value)}>
              {props.country && props.country !== "Australia" ?
                <option value="null">N/A</option> : (!props.city && agrCurrentUnique[0] === agrcurrentInDB ?
                  agrCurrentUnique.map(agr => (
                    <option value={`${agr}`} key={agr} >{agr}</option>
                  )) :
                  currentAgreement.map(agr => (
                    <option value={`${agr.value}`} key={agr.id} >{agr.name}</option>
                  ))
                )
              }
            </select>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column">Proposed</div>
            <select className="ten wide column border" onChange={(e) => handleProposedClassification(e.target.value)}>
              {props.country && props.country !== "Australia" ?
                <option value="null">N/A</option> : (!props.city && agrProposedUnique[0] === agrProposedInDB ?
                  agrProposedUnique.map(agr => (
                    <option value={`${agr}`} key={agr} >{agr}</option>
                  )) :
                  proposedAgreement.map(agr => (
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
                <option value="null">N/A</option> : (!props.city &&currentClassification.length === 0 ?
                  classCurrentUnique.map(cl => (
                    <option value={`${cl}`} key={cl} >{cl}</option>)) :
                  currentClassification.map(current => (
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
                <option value="null">N/A</option> : (!props.city && proposedClassification.length === 0 ?
                  classProposedUnique.map(cl => (
                    <option value={`${cl}`} key={cl} >{cl}</option>)) : 
                  proposedClassification.map(proposed => (
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
            <select value={!workSchedule ? props.work_schedule : workSchedule} onChange={(e) => handleWorkSchedule(e.target.value)}>
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
