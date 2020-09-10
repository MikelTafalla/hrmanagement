import React from "react";



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
                            <textarea rows={2} className="textarea" defaultValue={props.change_justification} />
                        </div>
                    </div>
                </div>
                <div className="ui equal width padded grid container">
                    <div className="row">
                        <label className="three wide column">Submited By:</label>
                        <input className="three wide column" />
                        <label className="one wide column">Day</label>
                        <div className="one wide column">
                            <select>
                                <option className="one">1</option>
                                <option className="two">2</option>
                                <option className="three">3</option>
                                <option className="four">4</option>
                                <option className="five">5</option>
                                <option className="six">6</option>
                                <option className="seven">7</option>
                                <option className="eight">8</option>
                                <option className="nine">9</option>
                                <option className="ten">10</option>
                                <option className="eleven">11</option>
                                <option className="twelve">12</option>
                                <option className="thirteen">13</option>
                                <option className="fouteen">14</option>
                                <option className="fifteen">15</option>
                                <option className="sixteen">16</option>
                                <option className="seventeen">17</option>
                                <option className="eighteen">18</option>
                                <option className="nineteen">19</option>
                                <option className="twenty">20</option>
                                <option className="twenty-one">21</option>
                                <option className="twenty-two">22</option>
                                <option className="twenty-three">23</option>
                                <option className="twenty-four">24</option>
                                <option className="twenty-five">25</option>
                                <option className="twenty-six">26</option>
                                <option className="twenty-seven">27</option>
                                <option className="twenty-eight">28</option>
                                <option className="twenty-nine">29</option>
                                <option className="thirty">30</option>
                                <option className="thirty-one">31</option>
                            </select>
                        </div>
                        <label className="one wide column">Month</label>
                        <div className="two wide column">
                            <select>
                                <option className="January">Jan</option>
                                <option className="February">Feb</option>
                                <option className="March">Mar</option>
                                <option className="April">Apr</option>
                                <option className="May">May</option>
                                <option className="June">Jun</option>
                                <option className="July">Jul</option>
                                <option className="August">Aug</option>
                                <option className="September">Sep</option>
                                <option className="October">Oct</option>
                                <option className="November">Nov</option>
                                <option className="December">Dec</option>
                            </select>
                        </div>
                        <label className="one wide column">Year</label>
                        <div className="one wide column">
                            <input />
                        </div>
                    </div>
                    <div className="row">
                        <label className="three wide column">Position:</label>
                        <input className="three wide column" />
                    </div>
                    <div className="row">
                        <p className="eigth wide column">
                            **Please send completed from to HR central to begin the approval process - HR.Central.AP@o-i.com
                        </p>
                    </div>
                    <div className="row">
                        <label className="six wide column">HR Manager/HR Business Partner</label>
                        <input className="five wide column" />
                    </div>
                    <div className="row">
                        <label className="six wide column">Signature</label>
                        <input className="five wide column" />
                    </div>
                    <div className="row">
                        <label className="six wide column">First Approver</label>
                        <input className="five wide column" />
                    </div>
                    <div className="row">
                        <label className="six wide column">Signature</label>
                        <input className="five wide column" />
                    </div>
                    <div className="row">
                        <label className="six wide column">Second Approver</label>
                        <input className="five wide column" />
                    </div>
                    <div className="row">
                        <label className="six wide column">Signature</label>
                        <input className="five wide column" />
                    </div>
                    <div className="row">
                        <p className="seven wide column" style={{ color: "red" }}>Check the HRC Check-Regional Comp Calcs Sheet and the Superannuation fund</p>
                        <div className="right floated column">
                            <label>Payroll Number</label>
                            <input className="seven wide column" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="seven wide column"></div>
                        <div className="seven wide column">
                            <label>Position Number</label>
                            <input />
                        </div>
                    </div>
                    <div className="row">
                        <label className="three wide column">HR Central-Name</label>
                        <input className="four wide column" />
                        <label className="three wide column">Template to be used</label>
                        <input className="four wide column" placeholder="Letter Template" defaultValue={props.template} />
                    </div>
                    <div className="row">
                        <label className="three wide column">Signature</label>
                        <input className="four wide column" />
                        <label className="three wide column">Superannuation</label>
                        <div className="five wide column">
                            <select>
                                <option className="dbfund">DB Fund</option>
                                <option className="superannuation">Superannuation</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <label className="three wide column">Payroll-Name</label>
                        <input className="four wide column" />
                        <label className="three wide column">Visa</label>
                        <div className="two wide column">
                            <select>
                                <option className="yes">Yes</option>
                                <option className="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <p className="ten wide column" style={{ color: "red" }}>Please check the employee record in SuccessFactors</p>
                    </div>
                    <div className="row">
                        <label className="three wide column">Signature</label>
                        <input className="four wide column" />
                        <label className="three wide column">Comments</label>
                        <textarea rows={2} className="textarea" defaultValue={props.comments} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SectionD;
