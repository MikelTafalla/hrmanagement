import React from "react";
import "./SectionB.css"

function SectionBNewHire(props) {
  
  return (
    <div>
      <div className="ui padded grid container">

        <div className="sixteen wide fluid centered blue column">{props.SectionB}</div>

        <div className="row">
          <div className="five wide column">Hay Point</div>
          <div className="four wide column"> Current: <input type="text" name="haypoint" value={props.haypoint} onChange={(e) => props.handleInputChange(e)}></input></div>
          <div className="one wide column"></div>
          <div className="four wide column">Currency: <input type="text" name="currency" value={props.money} onChange={(e) => props.handleInputChange(e)}></input> </div>
        </div>

        <div className="row">
          <div className="five wide column">Motor Vehicle Allowance</div>
          <div className="four wide column"> Current: <input type="text" name="vehicleAllowance" value={props.vehicleAllowance} onChange={(e) => props.handleInputChange(e)}></input></div>
          <div className="one wide column"></div>
          <div className="four wide column">Mid Point: <input type="text" name="midPoint"value={props.midPoint} onChange={(e) => props.handleInputChange(e)}></input> </div>
        </div>

        <div className="row">
          <div className="five wide column">Target STI %</div>
          <div className="four wide column"> Current: <input type="text" name="target_STI" value={props.target_STI} onChange={(e) => props.handleInputChange(e)}></input></div>
          <div className="one wide column"></div>
          <div className="four wide column">Max Point: <input type="text" name="maxPoint"value={props.maxPoint} onChange={(e) => props.handleInputChange(e)}></input> </div>
        </div>

        <div className="row">
          <label className="five wide column">	Other Allowances (Please Specify)
			    </label>
          <textarea type="text" className="nine wide column" name="otherAllowances" value={props.otherAllowances} onChange={(e) => props.handleInputChange(e)} />
        </div>

      </div>
    </div>
  )
};

export default SectionBNewHire;