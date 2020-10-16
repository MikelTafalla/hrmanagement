import React from "react";
import Countries from "../sectionA/countries.json";
import Functions from "../sectionA/functions.json";
import Days from "../sectionD/days.json";
import Months from "../sectionD/months.json";

const Termination = (props) => {

  return (
    <React.Fragment>
      <div className="ui equal width padded grid container">

        <div className="sixteen wide grey column">Separation Form</div>

        <div className="row">
          <div className="five wide column">Employee Name</div>
          <input type="text" name="employee_name" value={props.employee_name} className="ten wide column border" onChange={(e) => props.handleInputChange(e)} />
        </div>

        <div className="row">
          <div className="five wide column">Employee ID</div>
          <input type="text" name="employee_id" value={props.employee_id} className="ten wide column border" onChange={(e) => props.handleInputChange(e)} />
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
            <select name="location" onChange={(e) => props.handleDropdown(e)}>
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
          <div className="five wide column">
            Separation Type
          </div>
          <div className="five wide column">
            <select name="separationType" value={props.separationType} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Select...</option>
              <option value="termination">Termination</option>
              <option value="resignation">Resignation</option>
              <option value="redundancy">Redundancy</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Reason for Separation
          </div>
          <div className="five wide column">
            <select name="reasonSeparation" value={props.reasonSeparation} onChange={(e) => props.handleDropdown(e)}>
              {props.displayReasons.map(reason => (
                <option value={`${reason}`} key={reason}>{reason}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <label className="five wide column">Last day of Work:<p>(Last day in the office-IT Access will be terminated)</p></label>

          <label className="one wide column">Day</label>
          <div className="one wide column">
            <select name="lastWorkDay" value={props.lastWorkDay} onChange={(e) => props.handleDropdown(e)}>
              {Days.map(day => (
                <option value={day.value} key={day.value}>{day.day}</option>
              ))}
            </select>
          </div>
          <label className="one wide column">Month</label>
          <div className="two wide column">
            <select name="lastWorkMonth" value={props.lastWorkMonth} onChange={(e) => props.handleDropdown(e)}>
              {Months.map(month => (
                <option value={month.value} key={month.value}>{month.month}</option>
              ))}
            </select>
          </div>
          <label className="one wide column">Year</label>
          <div className="one wide column">
            <input type="text" name="lastWorkYear" value={props.lastWorkYear} onChange={(e) => props.handleInputChange(e)} />
          </div>
        </div>

        <div className="row">
          <label className="five wide column">Last day of Employment:<p>(Last day with O-I)</p></label>

          <label className="one wide column">Day</label>
          <div className="one wide column">
            <select name="lastEmploymentDay" value={props.lastEmploymentDay} onChange={(e) => props.handleDropdown(e)}>
              {Days.map(day => (
                <option value={day.value} key={day.value}>{day.day}</option>
              ))}
            </select>
          </div>
          <label className="one wide column">Month</label>
          <div className="two wide column">
            <select name="lastEmploymentMonth" value={props.lastEmploymentMonth} onChange={(e) => props.handleDropdown(e)}>
              {Months.map(month => (
                <option value={month.value} key={month.value}>{month.month}</option>
              ))}
            </select>
          </div>
          <label className="one wide column">Year</label>
          <div className="one wide column">
            <input type="text" name="lastEmploymentYear" value={props.lastEmploymentYear} onChange={(e) => props.handleInputChange(e)} />
          </div>
        </div>
        {/* Full notice period */}
        <div className="row">
          <div className="five wide column">
            Is the Employee working out their full notice period?
            <p>(Refer to HRBP/HRM)</p></div>
          <div className="five wide column">
            <select name="fullNoticePeriod" value={props.fullNoticePeriod} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Please Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        {/* End Full notice period */}

        {/* Employee's position backfilled */}
        <div className="row">
          <div className="five wide column">
            Is the Employee's position being backfilled?
          </div>
          <div className="five wide column">
            <select name="positionBackfilled" value={props.positionBackfilled} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Please Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        {/* End Employee's position backfilled */}

        {/* Employee manager */}
        <div className="row">
          <div className="five wide column">
            Is the Employee a Manager?
          </div>
          <div className="five wide column">
            <select name="employeeManager" value={props.employeeManager} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Please Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        {/* End Employee manager */}

        {/* Employee direct reports */}
        <div className="row">
          <label className="five wide column">	If the Employee has existing direct reports, please identify whom they will report to upon the Employees exit:
			    </label>
          <textarea type="text" className="nine wide column" name="reportUponExit" value={props.reportUponExit} onChange={(e) => props.handleInputChange(e)} />
        </div>
        {/* End direct reports */}

        {/* Employee not working notice period */}
        <div className="row">
          <div className="five wide column">
            If the Employee is ont working out their notice period, please select the payment option<p>(Refer to HRBP/HRM)</p>
          </div>
          <div className="eight wide column">
            <select name="paymentOption" value={props.paymentOption} onChange={(e) => props.handleDropdown(e)}>
              <option value="null">Please Select</option>
              <option value="yes">Payment in lieu of notice period.</option>
              <option value="no">Payment in lieu of part notice period.</option>
              <option value="no">None payment of notice period.</option>
              <option value="no">None payment of part notice period.</option>
            </select>
          </div>
        </div>
        {/* End Employee not working notice period */}

        {/* Additional comments */}
        <div className="row">
          <label className="five wide column">Additional Comments<p>(e.g. recommendation to re-employ, reason for separation if not listed)</p></label>
          <textarea type="text" className="nine wide column" name="additionalComments" value={props.additionalComments} onChange={(e) => props.handleInputChange(e)} />
        </div>
        {/* End additional comments */}

        {/* Separation submitted by and position */}
        <div className="row">
          <label className="three wide column">Submited By:</label>
          <input type="text" className="three wide column" name="submitted" value={props.submitted} onChange={(e) => props.handleInputChange(e)} />
          <label className="one wide column">Day</label>
          <div className="one wide column">
            <select name="submissionDay" value={props.submissionDay} onChange={(e) => props.handleDropdown(e)}>
              {Days.map(day => (
                <option value={day.value} key={day.value}>{day.day}</option>
              ))}
            </select>
          </div>
          <label className="one wide column">Month</label>
          <div className="two wide column">
            <select name="submissionMonth" value={props.submissionMonth} onChange={(e) => props.handleDropdown(e)}>
              {Months.map(month => (
                <option value={month.value} key={month.value}>{month.month}</option>
              ))}
            </select>
          </div>
          <label className="one wide column">Year</label>
          <div className="one wide column">
            <input type="text" name="submissionYear" value={props.submissionYear} onChange={(e) => props.handleInputChange(e)} />
          </div>
        </div>
        <div className="row">
          <label className="three wide column">Position:</label>
          <input type="text" className="three wide column" name="submittedByPosition" value={props.submittedByPosition} onChange={(e) => props.handleInputChange(e)} />
        </div>
        {/* End Separation submitted by and position */}

        {/* First approver and signature */}
        <div className="row">
          <label className="three wide column">First Approver</label>
          <input type="text" className="three wide column" name="approverOne" value={props.approverOne} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="row">
          <label className="three wide column">Signature:</label>
          <input type="text" className="three wide column" name="signatureOne" value={props.signatureOne} onChange={(e) => props.handleInputChange(e)} />
        </div>
        {/* End First approver and Signature */}

        {/* Second approver and signature */}
        <div className="row">
          <label className="three wide column">Second Approver</label>
          <input type="text" className="three wide column" name="approverTwo" value={props.approverTwo} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="row">
          <label className="three wide column">Signature:</label>
          <input type="text" className="three wide column" name="signatureTwo" value={props.signatureTwo} onChange={(e) => props.handleInputChange(e)} />
        </div>
        {/* End approver and signature */}

        {/* HR central, payroll number and signature */}
        <div className="row">
          <label className="three wide column">HR Central</label>
          <input type="text" className="four wide column" name="hrCentral" value={props.hrCentral} onChange={(e) => props.handleInputChange(e)} />
          <label className="three wide column">Payroll Number</label>
          <input type="text" className="four wide column" name="payrollNumber" value={props.payrollNumber} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="row">
          <label className="three wide column">Signature</label>
          <input type="text" className="four wide column" name="hrSignature" value={props.hrSignature} onChange={(e) => props.handleInputChange(e)} />
          <label className="three wide column">Position Number</label>
          <input type="text" className="four wide column" name="positionNumber" value={props.positionNumber} onChange={(e) => props.handleInputChange(e)} />
        </div>
        {/* End HR central, payroll number and signature */}

        {/* Payroll name and signature */}
        <div className="row">
          <label className="three wide column">Payroll Name</label>
          <input type="text" className="four wide column" name="payrollName" value={props.payrollName} onChange={(e) => props.handleInputChange(e)} />
        </div>
        <div className="row">
          <label className="three wide column">Signature</label>
          <input type="text" className="four wide column" name="payrollSignature" value={props.payrollSignature} onChange={(e) => props.handleInputChange(e)} />
          <label className="three wide column">Comments</label>
          <textarea type="text" className="four wide column" name="comments" value={props.comments} onChange={(e) => props.handleInputChange(e)} />
        </div>
        {/* End payroll name and signature */}
        <div className="sixteen wide grey column"></div>
      </div>

    </React.Fragment>
  )
};

export default Termination;
