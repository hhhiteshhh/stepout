import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "./firebase";
import "./SignUp.css";

function SignUp() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        });
        db.collection("users")
          .doc(authUser.user?.uid)
          .collection("availableQuestions")
          .add({
            q: "How would you best describe yourself & be honest",
            options: [
              "Only help yourself",
              "Ready to help others",
              "Messy & Unorganised",
              "Unplanned",
            ],
            questionId: 1,
          });
        db.collection("users")
          .doc(authUser.user?.uid)
          .collection("availableQuestions")
          .add({
            q: "What kind of  person you really are?",
            options: [
              "Who stays in the past",
              "Move on easily",
              "who is mentally weak",
              "Impatient",
            ],
            questionId: 2,
          });

        db.collection("users")
          .doc(authUser.user?.uid)
          .collection("availableQuestions")
          .add({
            q: "Describe your physical activity",
            options: ["Gym Routine", "Regular", "Irregular", "Not much"],
            questionId: 3,
          });

        db.collection("users")
          .doc(authUser.user?.uid)
          .collection("availableQuestions")
          .add({
            q: "How much digitally active you are?",
            options: ["12 hrs or more", "8 - 12 hrs", "4 - 8 hrs", "0 - 4 hrs"],
            questionId: 4,
          });

        if (authUser) {
          history.push("/signin");
        }
      })
      .catch((error) => alert(error.message));
    //soome fancy firebase register shitt...
  };
  return (
    <div className="signup__container">
      <div className="signup__header">Create Account</div>
      <div className="signup__input">
        <form className="app__signup">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signUpButton" onClick={signUp}>
            Sign up
          </button>
        </form>
        <div className="signin__footer">
          Already have an Account?
          <Link to="/signin">
            <b>Sign in</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
