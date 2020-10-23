import React from "react";
import Days from "../sectionD/days.json";
import Months from "../sectionD/months.json";

const SectionDNewHire = (props) => {

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
              <label>Comments</label>
              <textarea rows={2} name="comments" className="textarea" value={props.comments} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
        </div>
        <div className="ui equal width padded grid container">
          <div className="row">
            <label className="three wide column">Submited By:</label>
            <input type="text" className="three wide column" name="submittedBy" value={props.submittedBy} onChange={(e) => props.handleInputChange(e)} />
            <label className="one wide column">Day</label>
            <div className="one wide column">
              <select name="day" value={props.day} onChange={(e) => props.handleDropdown(e)}>
                {Days.map(day => (
                  <option value={day.value} key={day.value}>{day.day}</option>
                ))}
              </select>
            </div>
            <label className="one wide column">Month</label>
            <div className="two wide column">
              <select name="month" value={props.month} onChange={(e) => props.handleDropdown(e)}>
                {Months.map(month => (
                  <option value={month.value} key={month.value}>{month.month}</option>
                ))}
              </select>
            </div>
            <label className="one wide column">Year</label>
            <div className="one wide column">
              <input type="text" name="year" value={props.year} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
          <div className="row">
            <label className="three wide column">Position:</label>
            <input type="text" className="three wide column" name="positionD" value={props.positionD} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <p className="eigth wide column">
              **Please send completed from to your Talent Acquisition Consultant to begin the approval process</p>
          </div>
          <div className="row">
            <label className="six wide column">HR Manager/HR Business Partner</label>
            <input type="text" className="five wide column" name="manager_partner" value={props.manager_partner} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="mpSignature" value={props.mpSignature} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">First Approver</label>
            <input type="text" className="five wide column" name="approverOne" value={props.approverOne} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="signatureOne" value={props.signatureOne} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Second Approver</label>
            <input type="text" className="five wide column" name="approverTwo" value={props.approverTwo} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="signatureTwo" value={props.signatureTwo} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Third Approver</label>
            <input type="text" className="five wide column" name="approverThree" value={props.approverThree} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="signatureThree" value={props.signatureThree} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Fourth Approver</label>
            <input type="text" className="five wide column" name="approverFour" value={props.approverFour} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="signatureFour" value={props.signatureFour} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Fifth Approver</label>
            <input type="text" className="five wide column" name="approverFive" value={props.approverFive} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="six wide column">Signature</label>
            <input type="text" className="five wide column" name="signatureFive" value={props.signatureFive} onChange={(e) => props.handleInputChange(e)} />
          </div>

          <div className="row">
            <p className="eigth wide column">
              **Talent Acquisition to send completed approved form to HR Central to begin the onboarding process</p>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <p className="seven wide column" style={{ color: "red" }}>Please attach all new hire documentation to this workflow</p>
            <div className="right floated column">
              <label>New Position Number</label>
              <input type="text" className="seven wide column" name="newPosition" value={props.newPosition} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
          <div className="row">
            <div className="seven wide column"></div>
            <div className="seven wide column">
              <label>U-ID</label>
              <input type="text" name="uID" value={props.uID} onChange={(e) => props.handleInputChange(e)} />
            </div>
          </div>
          <div className="row">
            <label className="three wide column">HR Central-Name</label>
            <input type="text" className="four wide column" name="hrCentral" value={props.hrCentral} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="three wide column">Signature</label>
            <input type="text" className="four wide column" name="hrCentralSignature" value={props.hrCentralSignature} onChange={(e) => props.handleInputChange(e)} />
          </div>
          <div className="row">
            <label className="three wide column">Payroll-Name</label>
            <input type="text" className="four wide column" name="payroll" value={props.payroll} onChange={(e) => props.handleInputChange(e)} />
            <label className="three wide column">Employee Subgroup</label>
            <input type="text" className="four wide column" name="employeeSubgroup" value={props.employeeSubgroup} onChange={(e) => props.handleInputChange(e)} />
          </div>
          
          <div className="row">
            <label className="three wide column">Signature</label>
            <input type="text" className="four wide column" name="payrollSignature" value={props.payrollSignature} onChange={(e) => props.handleInputChange(e)} />
            <label className="three wide column">Comments</label>
            <textarea rows={2} className="textarea" name="commentsTwo" value={props.commentsTwo} onChange={(e) => props.handleInputChange(e)} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default SectionDNewHire;
