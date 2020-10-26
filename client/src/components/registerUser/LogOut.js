import React from "react";
import { Link } from "react-router-dom";

const LogOut = () => {
  const clearAll = () => {
    window.localStorage.clear();
  }
  return (
    <Link to="/"><button className="ui right floated active button" onClick={() => clearAll()} >
      <i className="user icon"></i>
      Logout
    </button></Link>
  )

}

export default LogOut;