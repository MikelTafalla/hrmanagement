import React from "react";
import Days from "./days.json";
import Months from "./months.json";

const SectionD = (props) => {

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
              <textarea rows={2} name="change_justification" className="textarea" value={props.change_justification} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
        </div>
        <div className="ui equal width padded grid container">
          <div className="row">
            <label className="three wide column">Submited By:</label>
            <input type="text" className="three wide column" name="submitted_by_name" value={props.submitted_by_name} onChange={(e) => props.handleInputChange(e)} />
            <label className="one wide column">Day</label>
            <div className="one wide column">
              <select name="submission_day" value={props.submission_day} onChange={(e) => props.handleDropdown(e)}>
                {Days.map(day => (
                  <option value={day.value} key={day.value}>{day.day}</option>
                ))}
              </select>
            </div>
            <label className="one wide column">Month</label>
            <div className="two wide column">
              <select name="submission_month" value={props.submission_month} onChange={(e) => props.handleDropdown(e)}>
                {Months.map(month => (
                  <option value={month.value} key={month.value}>{month.month}</option>
                ))}
              </select>
            </div>
            <label className="one wide column">Year</label>
            <div className="one wide column">
              <input type="text" name="submission_year" value={props.submission_year} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
          <div className="row">
            <label className="three wide column">Position:</label>
            <input type="text" className="three wide column" name="submitted_by_position" value={props.submitted_by_position} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <p className="eigth wide column">
              **Please send completed from to HR central to begin the approval process - HR.Central.AP@o-i.com
                        </p>
          </div>
          <div className="row">
            <label className="six wide column">HR Manager/HR Business Partner</label>
            <input type="text" className="five wide column" name="hr_name" value={props.hr_name} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="hr_signature" value={props.hr_signature} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">First Approver</label>
            <input type="text" className="five wide column" name="first_approver_name" value={props.first_approver_name} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="first_approver_signature" value={props.first_approver_signature} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Second Approver</label>
            <input type="text" className="five wide column" name="second_approver_name" value={props.second_approver_name} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="second_approver_signature" value={props.second_approver_signature} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <p className="seven wide column" style={{ color: "red" }}>Check the HRC Check-Regional Comp Calcs Sheet and the Superannuation fund</p>
            <div className="right floated column">
              <label>Payroll Number</label>
              <input type="text" className="seven wide column" name="payroll_number" value={props.payroll_number} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
          <div className="row">
            <div className="seven wide column"></div>
            <div className="seven wide column">
              <label>Position Number</label>
              <input type="text" name="payroll_position" value={props.payroll_position} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
          <div className="row">
            <label className="three wide column">HR Central-Name</label>
            <input type="text" className="four wide column" name="hr_central_name" value={props.hr_central_name} onChange={(e) => props.handleInputChange(e)} />
            <label className="three wide column">Template to be used</label>
            <input type="text" className="four wide column" placeholder="Letter Template" name="template" value={props.template} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="three wide column">Signature</label>
            <input type="text" className="four wide column" name="hr_central_signature" value={props.hr_central_signature} onChange={(e) => props.handleInputChange(e)} />
            <label className="three wide column">Superannuation</label>
            <div className="five wide column">
              <select name="superannuation_D" value={props.superannuation_D} onChange={(e) => props.handleDropdown(e)}>
                <option value="DB Fund" >DB Fund</option>
                <option value="Superannuation" >Superannuation</option>
              </select>
            </div>
          </div>
          <div className="row">
            <label className="three wide column">Payroll-Name</label>
            <input type="text" className="four wide column" name="payroll_name" value={props.payroll_name} onChange={(e) => props.handleInputChange(e)} />
            <label className="three wide column">Visa</label>
            <div className="two wide column">
              <select name="visa_check" value={props.visa_check} onChange={(e) => props.handleDropdown(e)}>
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
            <input type="text" className="four wide column" name="payroll_signature" value={props.payroll_signature} onChange={(e) => props.handleInputChange(e)} />
            <label className="three wide column">Comments</label>
            <textarea rows={2} className="textarea" name="comments" value={props.comments} onChange={(e) => props.handleInputChange(e)} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default SectionD;
