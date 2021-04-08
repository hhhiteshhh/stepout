import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {  auth } from "./firebase";
import "./SignIn.css";

function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
 
  const signIn = (e) => {
    e.preventDefault();
    //some firebase fancy login shitt....
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/profile");
      })
      .catch((error) => alert(error.message));
  };

 

  return (
    <div className="signin__container">
      <div className="signin__header">Sign In to Step Out</div>
      <div className="signin__input">
        <form className="app__signin">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <div className="signup__footer">
          New Here?
          <Link to="/signup">
            <b>Sign up</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
