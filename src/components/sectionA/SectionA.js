import React from "react";
import "./SectionA.css"

function SectionA(props) {
  return (
    <div>
      <div className="ui equal width padded grid container">

        <div className="sixteen wide green column">{props.sectionA}</div>
        <div class="row">
          <div className="five wide column" style={{ color: "red" }}>
            Please Select Employment Type to Begin
          </div>
          <div className="five wide column">
            <select>
              <option value="salaried">Salaried</option>
              <option value="waged">Waged</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div className="five wide column">Employee Classification</div>
          <div className="five wide column">
            <select>
              <option value="permanent">Permanent</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div className="five wide column">New Position / Existing Position</div>
          <div className="five wide column">
            <select>
              <option value="new Position">New Position</option>
              <option value="existing Position">Existing Position</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div className="five wide column">Employee Name</div>
          <input className="ten wide column border"></input>
        </div>
        <div class="row">
          <div className="five wide column">Employee ID</div>
          <input className="ten wide column border"></input>
        </div>

        

      </div>

    </div>
  )
};

export default SectionA;