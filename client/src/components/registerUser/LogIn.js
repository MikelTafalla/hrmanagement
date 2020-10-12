import React, {useState} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API"

const LogIn = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUser({ ...user, [name]: value })
  }

  const loginUser = () => {
    API.login(user)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
            console.log('successful login')
            localStorage.setItem("ActiveLoggedInUser", JSON.stringify(response.data.username))
            window.location = "/employeedirectory"
          } else {
            console.log('wrong credentials')
          }
      })
      .catch(err => console.log(err))
  }
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
                <input type="email" name="username" placeholder="E-mail address" value={user.username} onChange={(e) => handleInputChange(e)}/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => handleInputChange(e)}/>
              </div>
            </div>
            <button className="ui fluid large teal" type="submit" onClick={(e)=> {e.preventDefault(); loginUser()}}>Login</button>
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