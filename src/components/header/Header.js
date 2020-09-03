import React from "react";
import "./HeaderStyle.css"

function Header(props) {
  return (
    <div className="ui equal width padded grid container">
      <div className="sixteen wide grey column">{props.title}</div>
      <div className="eight wide column">
        <ul className="bold">
          <li>{props.mandatory}</li>
          <li>{props.questions}</li>
          <li>{props.phone}</li>
          <li>{props.country}</li>
        </ul>
      </div>
      <div className="sixteen wide column text"><span className="bold">Definition:</span>{props.message}</div>
      <div className="ten wide column">
        <p className="bold">Instructions</p>
        <ol className="instructionBox">
          <li>
            {props.instruction1}
            <ul>
              <li>{props.instruction1A}</li>
              <li>{props.instruction1B}</li>
            </ul>
          </li>
          <li>{props.instruction2}</li>
        </ol>
      </div>
      <div className="left floated right aligned six wide blue column">
        <ul className="bold">
          <li>{props.salariedChange}</li>
          <li>{props.wagedChange}</li>
        </ul>
      </div>
      </div>
  )
};

export default Header;