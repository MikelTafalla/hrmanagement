import React, { useState, useEffect } from "react";
import Agreement from "./agreement.json";

function SectionC(props) {
  const [activeAgreement, setActiveAgreement] = useState([{}]);

  useEffect(() => {
    const cities = ["Adelaide", "Brisbane", "Melbourne", "Sydney"];

    for (let i = 0; i < cities.length; i++) {
      if (cities[i] === "Adelaide") {
        return setActiveAgreement(Agreement[i]);
      }
    }
  }, []);

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
            <select className="ten wide column border">
              {/* {activeAgreement.map(agr => (
        <option key={agr.key} value={`${agr.value}`}>{agr.name}</option>
      ))} */}
            </select>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column">Proposed</div>
            <select className="ten wide column border">
              <option value="">option one</option>
              <option value="">option two</option>
              <option value="">option three</option>
              <option value="">option four</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Classification:</div>
          <div className="row">
            <div className="five wide column">Unknown Field</div>
            <select>
              <option value="">option one</option>
              <option value="">option two</option>
              <option value="">option three</option>
              <option value="">option four</option>
            </select>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column">Unknown Field 2</div>
            <select className="ten wide column border">
              <option value="">option one</option>
              <option value="">option two</option>
              <option value="">option three</option>
              <option value="">option four</option>
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
            defaultValue={props.other_allowance}
          ></input>
        </div>

        <div className="row">
          <div className="five wide column">Work Schedule:</div>
          <div className="five wide column">
            <select>
              <option value="">Day</option>
              <option value="">Shift</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">Shift:</div>
          <div className="five wide column">
            <select>
              <option value="">N/A</option>
              <option value="">Shift-A</option>
              <option value="">Shift-B</option>
              <option value="">Shift-C</option>
              <option value="">Shift-D</option>
              <option value="">Shift-E</option>
              <option value="">Shift-1</option>
              <option value="">Shift-2</option>
              <option value="">Shift-3</option>
              <option value="">Shift-4</option>
              <option value="">Shift-5</option>
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
          <input className="five wide column border"></input>
        </div>

        <div className="row">
          <div className="five wide column">Tuesday</div>
          <input className="five wide column border"></input>
        </div>

        <div className="row">
          <div className="five wide column">Wednesday</div>
          <input className="five wide column border"></input>
        </div>

        <div className="row">
          <div className="five wide column">Thursday</div>
          <input className="five wide column border"></input>
        </div>

        <div className="row">
          <div className="five wide column">Friday</div>
          <input className="five wide column border"></input>
        </div>

        <div className="row">
          <div className="five wide column">Saturday</div>
          <input className="five wide column border"></input>
        </div>

        <div className="row">
          <div className="five wide column">Sunday</div>
          <input className="five wide column border"></input>
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
