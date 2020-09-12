import React, { useState, useEffect } from "react";
import Agreement from "./agreement.json"


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
      <div className="ui form" style={{ margin: "100px" }}>
        <div className="inline fields">
          <div className="fourteen wide field" style={{ backgroundColor: "teal" }}>
            <label>
              <h3 style={{ color: "white", padding: "10px" }}>
                {props.sectionC}
              </h3>
            </label>
          </div>
        </div>
        <div className="inline fields">
          <div className="six wide field">
            <label>Employment Agreement:</label>
          </div>
          <div className="six wide field" style={{ textAlign: "center" }}>
            <div className="field">
              <label>Current</label>
              <select>
                {/* {activeAgreement.map(agr => (
                  <option key={agr.key} value={`${agr.value}`}>{agr.name}</option>
                ))} */}
              </select>
            </div>
          </div>
          <div className="six wide field" style={{ textAlign: "center" }}>
            <div className="field">
              <label>Proposed</label>
              <select>
                <option value="">option one</option>
                <option value="">option two</option>
                <option value="">option three</option>
                <option value="">option four</option>
              </select>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="six wide field">
            <label>Classification:</label>
          </div>
          <div className="six wide field" style={{ textAlign: "center" }}>
            <div className="field">
              <label>Unk field</label>
              <select>
                <option value="">option one</option>
                <option value="">option two</option>
                <option value="">option three</option>
                <option value="">option four</option>
              </select>
            </div>
          </div>
          <div className="six wide field" style={{ textAlign: "center" }}>
            <div className="field">
              <label>Unk field</label>
              <select>
                <option value="">option one</option>
                <option value="">option two</option>
                <option value="">option three</option>
                <option value="">option four</option>
              </select>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="six wide field">
            <label>Team Leader Allowance:</label>
          </div>
          <div className="ten wide field">
            <div className="field">
              <input type="text" placeholder="Leader Allowance" defaultValue={props.team_leader_allowance}></input>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="six wide field">
            <label>Leading Hand Allowance:</label>
          </div>
          <div className="ten wide field">
            <div className="field">
              <input type="text" placeholder="Leading hand Allowance" defaultValue={props.leading_hand_allowance}></input>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="six wide field">
            <label>Dual Trade Allowance:</label>
          </div>
          <div className="ten wide field">
            <div className="field">
              <input type="text" placeholder="Trade Allowance" defaultValue={props.dual_trade_allowance}></input>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="six wide field">
            <label>Other Allowances (please specify):</label>
          </div>
          <div className="ten wide field">
            <div className="field">
              <input type="text" placeholder="Other Allowances" defaultValue={props.other_allowances}></input>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="six wide field">
            <label>Work Schedule:</label>
          </div>
          <div className="ten wide field">
            <div className="field">
              <select>
                <option value="">Day</option>
                <option value="">Shift</option>
              </select>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="six wide field">
            <label>Shift:</label>
          </div>
          <div className="ten wide field">
            <div className="field">
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
        </div>

        <div className="inline fields">
          <div className="eight wide field">
            <label>
              <h3>Work Days (waged employee):</h3>
            </label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <label>
                <h3>Hours Of Work:</h3>
              </label>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="eight wide field">
            <label>Monday:</label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Monday"></input>
            </div>
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <label>Tuesday:</label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Tuesday"></input>
            </div>
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <label>Wednesday:</label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Wednesday"></input>
            </div>
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <label>Thursday:</label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Thursday"></input>
            </div>
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <label>Friday:</label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Friday"></input>
            </div>
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <label>Saturday:</label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Saturday"></input>
            </div>
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <label>Sunday:</label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Sunday"></input>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <div className="eight wide field">
            <label>
              <h3>TOTAL HOURS:</h3>
            </label>
          </div>
          <div className="eight wide field">
            <div className="field">
              <input type="text" placeholder="Total Hours" defaultValue={props.total_hours_C}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
