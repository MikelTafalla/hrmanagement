import React from "react";
import "./SectionB.css"

function SectionB(props) {
    return (
        <div>
            <div className="ui equal width padded grid container">

                <div className="sixteen wide blue column">{props.SectionB}</div>
                <div class="row">
                    <div className="five wide column">
                        Hay Point
          </div>
                    <div class="row">
                        <div className="five wide column">Current</div>
                        <input className="ten wide column border"></input>
                    </div>

                    <div class="row">
                        <div className="five wide column">Proposed</div>
                        <input className="ten wide column border"></input>
                    </div>
                </div>

                <div class="row">
                    <div className="five wide column">
                        Currency
          </div>
                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>

                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>
                </div>

                <div class="row">
                    <div className="five wide column">
                        Base Salary
          </div>
                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>

                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>
                </div>

                <div class="row">
                    <div className="five wide column">
                        Motor Vehicle Allowance
          </div>
                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>

                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>
                </div>


                <div class="row">
                    <div className="five wide column">
                        Target STI %
          </div>
                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>

                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>
                </div>

                <div class="row">
                    <div className="five wide column">
                        Superannuation (AU Only)
          </div>
                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>

                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>
                </div>

                <div class="row">
                    <div className="five wide column">
                        Fixed Annual Reward (AU Only)
          </div>
                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>

                    <div class="row">
                        <div className="five wide column"></div>
                        <input className="ten wide column border"></input>
                    </div>
                </div>

                <div class="row">
                    <div className="five wide column">Other Allowances (Please Specify)</div>
                    <input className="ten wide column border"></input>
                </div>

                <div class="row">
                    <div className="five wide column"><h3>Work Days (Waged Employees)</h3>Tick the check box for the new work days</div>
                    <div className="five wide column"><h3>Hours of Work</h3>Fill-in the work per day</div>
                </div>

                <div class="row">
                    <div className="five wide column">Monday</div>
                    <input className="five wide column border"></input>
                </div>

                <div class="row">
                    <div className="five wide column">Tuesday</div>
                    <input className="five wide column border"></input>
                </div>

                <div class="row">
                    <div className="five wide column">Wednesday</div>
                    <input className="five wide column border"></input>
                </div>

                <div class="row">
                    <div className="five wide column">Thursday</div>
                    <input className="five wide column border"></input>
                </div>

                <div class="row">
                    <div className="five wide column">Friday</div>
                    <input className="five wide column border"></input>
                </div>

                <div class="row">
                    <div className="five wide column"><h3>Total Hours Per Week</h3></div>
                    <input className="two wide column border"></input>
                </div>








            </div>

        </div>
    )
};

export default SectionB;