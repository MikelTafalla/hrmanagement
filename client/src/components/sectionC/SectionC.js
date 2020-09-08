import React from "react";

function SectionC(props) {
  return (
    <div>
      <div class="ui form" style={{ margin: "100px" }}>
        <div class="inline fields">
          <div class="fourteen wide field" style={{ backgroundColor: "teal" }}>
            <label>
              <h3 style={{ color: "white", padding: "10px" }}>
                {props.sectionC}
              </h3>
            </label>
          </div>
        </div>
        <div class="inline fields">
          <div class="six wide field">
            <label>Employment Agreement:</label>
          </div>
          <div class="six wide field" style={{ textAlign: "center" }}>
            <div class="field">
              <label>Current</label>
              <select>
                <option value="">option one</option>
                <option value="">option two</option>
                <option value="">option three</option>
                <option value="">option four</option>
              </select>
            </div>
          </div>
          <div class="six wide field" style={{ textAlign: "center" }}>
            <div class="field">
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

        <div class="inline fields">
          <div class="six wide field">
            <label>Classification:</label>
          </div>
          <div class="six wide field" style={{ textAlign: "center" }}>
            <div class="field">
              <label>Unk field</label>
              <select>
                <option value="">option one</option>
                <option value="">option two</option>
                <option value="">option three</option>
                <option value="">option four</option>
              </select>
            </div>
          </div>
          <div class="six wide field" style={{ textAlign: "center" }}>
            <div class="field">
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

        <div class="inline fields">
          <div class="six wide field">
            <label>Team Leader Allowance:</label>
          </div>
          <div class="ten wide field">
            <div class="field">
              <input type="text" placeholder="Leader Allowance"></input>
            </div>
          </div>
        </div>

        <div class="inline fields">
          <div class="six wide field">
            <label>Leading Hand Allowance:</label>
          </div>
          <div class="ten wide field">
            <div class="field">
              <input type="text" placeholder="Leading hand Allowance"></input>
            </div>
          </div>
        </div>

        <div class="inline fields">
          <div class="six wide field">
            <label>Dual Trade Allowance:</label>
          </div>
          <div class="ten wide field">
            <div class="field">
              <input type="text" placeholder="Trade Allowance"></input>
            </div>
          </div>
        </div>

        <div class="inline fields">
          <div class="six wide field">
            <label>Other Allowances (please specify):</label>
          </div>
          <div class="ten wide field">
            <div class="field">
              <input type="text" placeholder="Other Allowances"></input>
            </div>
          </div>
        </div>

        <div class="inline fields">
          <div class="six wide field">
            <label>Work Schedule:</label>
          </div>
          <div class="ten wide field">
            <div class="field">
              <select>
                <option value="">Day</option>
                <option value="">Shift</option>
              </select>
            </div>
          </div>
        </div>

        <div class="inline fields">
          <div class="six wide field">
            <label>Shift:</label>
          </div>
          <div class="ten wide field">
            <div class="field">
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

        <div class="inline fields">
          <div class="eight wide field">
            <label>
              <h3>Work Days (waged employee):</h3>
            </label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <label>
                <h3>Hours Of Work:</h3>
              </label>
            </div>
          </div>
        </div>

        <div class="inline fields">
          <div class="eight wide field">
            <label>Monday:</label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Monday"></input>
            </div>
          </div>
        </div>
        <div class="inline fields">
          <div class="eight wide field">
            <label>Tuesday:</label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Tuesday"></input>
            </div>
          </div>
        </div>
        <div class="inline fields">
          <div class="eight wide field">
            <label>Wednesday:</label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Wednesday"></input>
            </div>
          </div>
        </div>
        <div class="inline fields">
          <div class="eight wide field">
            <label>Thursday:</label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Thursday"></input>
            </div>
          </div>
        </div>
        <div class="inline fields">
          <div class="eight wide field">
            <label>Friday:</label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Friday"></input>
            </div>
          </div>
        </div>
        <div class="inline fields">
          <div class="eight wide field">
            <label>Saturday:</label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Saturday"></input>
            </div>
          </div>
        </div>
        <div class="inline fields">
          <div class="eight wide field">
            <label>Sunday:</label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Sunday"></input>
            </div>
          </div>
        </div>

        <div class="inline fields">
          <div class="eight wide field">
            <label>
              <h3>TOTAL HOURS:</h3>
            </label>
          </div>
          <div class="eight wide field">
            <div class="field">
              <input type="text" placeholder="Total Hours"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
