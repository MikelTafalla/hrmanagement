import React, {useState} from "react";
import Days from "./days.json";
import Months from "./months.json";

const SectionD = (props) => {
  const[day, setDay] = useState("");
  const[month, setMonth] = useState("");
  const[superannuationD, setSuperannuationD] = useState("");
  const[visa, setVisa] = useState("");

  const handleDay = (selectedValue) => {
    setDay(selectedValue)
  }

  const handleMonth = (selectedValue) => {
    setMonth(selectedValue)
  }

  const handleSuperannuation = (selectedValue) => {
    setSuperannuationD(selectedValue)
  }

  const handleVisa = (selectedValue) => {
    setVisa(selectedValue)
  }

  return (
    <div>
      <div>
        <div className="ui equal width padded grid container">
          <div className="sixteen wide blue column">{props.sectionD}</div>
        </div>
        <div className="row"></div>
      </div>

      <div>
        <div className="ui segment">
          <div className="ui form">
            <div className="field">
              <label>Justification For Change</label>
              <textarea rows={2} className="textarea" defaultValue={props.change_justification} />
            </div>
          </div>
        </div>
        <div className="ui equal width padded grid container">
          <div className="row">
            <label className="three wide column">Submited By:</label>
            <input className="three wide column" defaultValue={props && props.submitted_by ? props.submitted_by.name : null} />
            <label className="one wide column">Day</label>
            <div className="one wide column">
              <select value={ !day ? (props && props.submition_date ? props.submition_date.day : "") : day} onChange={(e) => handleDay(e.target.value)}>
                {Days.map(day => (
                <option value={day.value} key={day.value}>{day.day}</option>
                ))}
              </select>
            </div>
            <label className="one wide column">Month</label>
            <div className="two wide column">
              <select value={ !month ? (props && props.submition_date ? props.submition_date.month : "") : month} onChange={(e) => handleMonth(e.target.value)}>
                {Months.map(month => (
                <option value={month.value} key={month.value}>{month.month}</option>
                ))}
              </select>
            </div>
            <label className="one wide column">Year</label>
            <div className="one wide column">
              <input defaultValue={props && props.submition_date ? props.submition_date.year : null}/>
            </div>
          </div>
          <div className="row">
            <label className="three wide column">Position:</label>
            <input className="three wide column" defaultValue={props && props.submitted_by ? props.submitted_by.position : null} />
          </div>
          <div className="row">
            <p className="eigth wide column">
              **Please send completed from to HR central to begin the approval process - HR.Central.AP@o-i.com
                        </p>
          </div>
          <div className="row">
            <label className="six wide column">HR Manager/HR Business Partner</label>
            <input className="five wide column" defaultValue={props && props.hr_name ? props.hr_name.name : null} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input className="five wide column" defaultValue={props && props.hr_name ? props.hr_name.signature : null} />
          </div>
          <div className="row">
            <label className="six wide column">First Approver</label>
            <input className="five wide column" defaultValue={props && props.first_approver ? props.first_approver.name : null} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input className="five wide column" defaultValue={props && props.first_approver ? props.first_approver.signature : null} />
          </div>
          <div className="row">
            <label className="six wide column">Second Approver</label>
            <input className="five wide column" defaultValue={props && props.second_approver ? props.second_approver.name : null}/>
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input className="five wide column" defaultValue={props && props.second_approver ? props.second_approver.signature : null}/>
          </div>
          <div className="row">
            <p className="seven wide column" style={{ color: "red" }}>Check the HRC Check-Regional Comp Calcs Sheet and the Superannuation fund</p>
            <div className="right floated column">
              <label>Payroll Number</label>
              <input className="seven wide column" defaultValue={props && props.payroll ? props.payroll.number : null} />
            </div>
          </div>
          <div className="row">
            <div className="seven wide column"></div>
            <div className="seven wide column">
              <label>Position Number</label>
              <input defaultValue={props && props.payroll ? props.payroll.position : null}/>
            </div>
          </div>
          <div className="row">
            <label className="three wide column">HR Central-Name</label>
            <input className="four wide column" defaultValue={props && props.hr_central ? props.hr_central.name : null}/>
            <label className="three wide column">Template to be used</label>
            <input className="four wide column" placeholder="Letter Template" defaultValue={props.template} />
          </div>
          <div className="row">
            <label className="three wide column">Signature</label>
            <input className="four wide column" defaultValue={props && props.hr_central ? props.hr_central.signature : null}/>
            <label className="three wide column">Superannuation</label>
            <div className="five wide column">
              <select value={ !superannuationD ? props.superannuation_d : superannuationD} onChange={(e) => handleSuperannuation(e.target.value)}>
                <option value="DB Fund" >DB Fund</option>
                <option value="Superannuation" >Superannuation</option>
              </select>
            </div>
          </div>
          <div className="row">
            <label className="three wide column">Payroll-Name</label>
            <input className="four wide column" defaultValue={props && props.payroll ? props.payroll.name : null}/>
            <label className="three wide column">Visa</label>
            <div className="two wide column">
              <select value={ !visa ? props.visa_check : visa} onChange={(e) => handleVisa(e.target.value)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="row">
            <p className="ten wide column" style={{ color: "red" }}>Please check the employee record in SuccessFactors</p>
          </div>
          <div className="row">
            <label className="three wide column">Signature</label>
            <input className="four wide column" defaultValue={props && props.payroll ? props.payroll.signature : null}/>
            <label className="three wide column">Comments</label>
            <textarea rows={2} className="textarea" defaultValue={props.comments} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default SectionD;
