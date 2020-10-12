import React, { useState } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [createUser, setCreateUser] = useState({ username: "", password: "", role: "null" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setCreateUser({ ...createUser, [name]: value })
  }
  const handleDropdown = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setCreateUser({ ...createUser, [name]: value })
  }
  const registerUser = () => {
    API.register(createUser)
      .then(response => {
        console.log(response)
        // if (!response.data.errmsg) {
        // 	console.log('successful signup')
        // 	this.setState({ //redirect to login page
        // 		redirectTo: '/login'
        // 	})
        // } else {
        // 	console.log('username already taken')
        // }
      })
      .catch(err => console.log(err))
  }
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
                <input type="email" name="username" placeholder="E-mail address" value={createUser.username} onChange={(e) => handleInputChange(e)} />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input type="password" name="password" placeholder="Password" value={createUser.password} onChange={(e) => handleInputChange(e)} />
              </div>
            </div>
            <div className="field">
              <select name="role" value={createUser.role} onChange={(e) => handleDropdown(e)}>
                <option value="null">Select Your Role</option>
                <option value="manager">Manager</option>
                <option value="payroll">Payroll</option>
                <option value="humanResource">Human Resources</option>
              </select>
            </div>
            <Link to="/"><button
              className="ui fluid large teal" type="submit"
              onClick={() => registerUser()}
            >Sign Up</button></Link>
          </div>
          <div className="ui error message"></div>
        </form>
      </div>
    </div >
  )
};

export default SignUp;