import React from "react";
import { Link } from "react-router-dom";





const LogIn = () => {
  return (

    <div className="ui two column middle aligned center aligned grid container">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            Log-in to your account
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
            <div className="ui fluid large teal submit button">Login</div>
          </div>
          <div className="ui error message"></div>
        </form>
        <div className="ui message">
          New to us? <Link to="register"><button>Sign up</button></Link>
        </div>
      </div>
    </div >
  )
};

export default LogIn;