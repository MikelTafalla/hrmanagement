import React from "react";
// import { Link } from "react-router-dom";


const SignUp = () => {
  return (

    <div className="ui two column middle aligned center aligned grid container">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            Create Account
        </div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input type="email" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="ui fluid large teal submit button">Sign Up</div>
          </div>
          <div className="ui error message"></div>
        </form>
      </div>
    </div >
  )
};

export default SignUp;