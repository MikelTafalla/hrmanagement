import React from "react";
import "./SectionB.css"

function SectionB(props) {

  return (
    <div>
      <div className="ui padded grid container">

        

        <div className="sixteen wide fluid centered blue column">{props.SectionB}</div>
        <div className="row">
          
          <div className="five wide column">
            Hay Point
          </div>
          <div className="row">
            <div className="five wide column">Current</div>
            <input className="ten wide column border" defaultValue={props && props.haypoint ? props.haypoint.current : null}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column">Proposed</div>
            <input className="ten wide column border" defaultValue={props && props.haypoint ? props.haypoint.proposed : null}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Currency
                    </div>
          <div className="row">
            <div className="five wide column"></div>
            
            <input className="ten wide column border" defaultValue={props && props.currency ? props.currency.current : null}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.currency ? props.currency.proposed : null}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Base Salary
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.currency ? props.base_salary.current : null}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.currency ? props.base_salary.proposed : null}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Motor Vehicle Allowance
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.vehicle ? props.vehicle.current : null}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.vehicle ? props.vehicle.proposed : null}></input>
          </div>
        </div>


        <div className="row">
          <div className="five wide column">
            Target STI %
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.target_sti ? props.target_sti.current : null}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.target_sti ? props.target_sti.proposed : null}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Superannuation (AU Only)
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.superannuation_B ? props.superannuation_B.current : null}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.superannuation_B ? props.superannuation_B.proposed : null} ></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Fixed Annual Reward (AU Only)
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.fixed_annual_reward ? props.fixed_annual_reward.current : null}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input className="ten wide column border" defaultValue={props && props.fixed_annual_reward ? props.fixed_annual_reward.proposed : null}></input>
          </div>
         
            
            <div className="one wide column"></div>
              Percentage (%)
            <input className="one wide column border" defaultValue={props && props.fixed_annual_reward ? props.fixed_annual_reward.proposed : null}></input>
          </div>
   

        <div className="row">
          <div className="five wide column">Other Allowances (Please Specify)</div>
          <input className="ten wide column border" defaultValue={props.other_allowances_B}></input>
        </div>

        <div className="row">
          <div className="five wide column"><h3>Work Days (Waged Employees)</h3>Tick the check box for the new work days</div>
          <div className="five wide column"><h3>Hours of Work</h3>Fill-in the work per day</div>
        </div>

        <div className="row">
          <div className="five wide column">Monday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_B ? props.hours_per_day_B.monday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Tuesday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_B ? props.hours_per_day_B.tuesday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Wednesday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_B ? props.hours_per_day_B.wednesday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Thursday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_B ? props.hours_per_day_B.thursday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Friday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_B ? props.hours_per_day_B.friday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Saturday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_B ? props.hours_per_day_B.thursday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column">Sunday</div>
          <input className="five wide column border" defaultValue={props && props.hours_per_day_B ? props.hours_per_day_B.friday : null}></input>
        </div>

        <div className="row">
          <div className="five wide column"><h3>Total Hours Per Week</h3></div>
          <input className="two wide column border" defaultValue={props.total_hours_B}></input>
        </div>

      </div>

    </div>
  )
};

export default SectionB;