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
            <input name="haypoint_current" type="text" className="ten wide column border" value={ props.haypoint_current } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column">Proposed</div>
            <input type="text" name="haypoint_proposed" className="ten wide column border" value={ props.haypoint_proposed} onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Currency
                    </div>
          <div className="row">
            <div className="five wide column"></div>
            
            <input type="text" name="currency_current" className="ten wide column border" value={props.currency_current } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="currency_proposed" className="ten wide column border" value={props.currency_proposed } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Base Salary
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="baseSalary_current" className="ten wide column border" value={props.baseSalary_current } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="baseSalary_proposed" className="ten wide column border" value={props.baseSalary_proposed } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Motor Vehicle Allowance
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="vehicle_current" className="ten wide column border" value={props.vehicle_current } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="vehicle_proposed" className="ten wide column border" value={props.vehicle_proposed } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Target STI %
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="sti_current" className="ten wide column border" value={props.sti_current } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>

          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="sti_proposed" className="ten wide column border" value={props.sti_proposed } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Superannuation (AU Only)
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="superannuationB_current" className="ten wide column border" value={props.superannuationB_current } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="superannuationB_proposed" className="ten wide column border" value={props.superannuationB_proposed } onChange={(e)=> props.handleInputChange(e)} ></input>
          </div>
        </div>

        <div className="row">
          <div className="five wide column">
            Fixed Annual Reward (AU Only)
          </div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="reward_current" className="ten wide column border" value={props.reward_current } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
          <div className="one wide column"></div>
          <div className="row">
            <div className="five wide column"></div>
            <input type="text" name="reward_proposed" className="ten wide column border" value={props.reward_proposed } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
         
            
            <div className="one wide column"></div>
              Percentage (%)
            <input type="text" name="percentage_change" className="one wide column border" value={props.percentage_change } onChange={(e)=> props.handleInputChange(e)}></input>
          </div>
   

        <div className="row">
          <div className="five wide column">Other Allowances (Please Specify)</div>
          <input type="text" name="other_allowances_B" className="ten wide column border" value={props.other_allowances_B } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column"><h3>Work Days (Waged Employees)</h3>Tick the check box for the new work days</div>
          <div className="five wide column"><h3>Hours of Work</h3>Fill-in the work per day</div>
        </div>

        <div className="row">
          <div className="five wide column">Monday</div>
          <input type="text" name="hoursB_monday" className="five wide column border" value={props.hoursB_monday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Tuesday</div>
          <input type="text" name="hoursB_tuesday" className="five wide column border" value={props.hoursB_tuesday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Wednesday</div>
          <input type="text" name="hoursB_wednesday" className="five wide column border" value={props.hoursB_wednesday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Thursday</div>
          <input type="text" name="hoursB_thursday" className="five wide column border" value={props.hoursB_thursday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Friday</div>
          <input type="text" name="hoursB_friday" className="five wide column border" value={props.hoursB_friday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Saturday</div>
          <input type="text" name="hoursB_saturday" className="five wide column border" value={props.hoursB_saturday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column">Sunday</div>
          <input type="text" name="hoursB_sunday" className="five wide column border" value={props.hoursB_sunday } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

        <div className="row">
          <div className="five wide column"><h3>Total Hours Per Week</h3></div>
          <input type="text" name="total_hours_B" className="two wide column border" value={props.total_hours_B } onChange={(e)=> props.handleInputChange(e)}></input>
        </div>

      </div>

    </div>
  )
};

export default SectionB;