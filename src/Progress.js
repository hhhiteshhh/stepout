import React from "react";
import "./Progress.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Progress(props) {
  const history = useHistory();
  const [{ user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        history.push("/");
      });
    }
  };
  return (
    <div className="progress">
      <div className="navoptions">
        {" "}
        <Link to="/profile" className="challenge__profile">
          Profile
        </Link>
        <Link to="/challenges" className="homechallenge">
          Challenges
        </Link>
        <Link to="/progress" className="progress__progress">
          Progress
        </Link>
        <Link to="/explore" className="homeexplore">
          Explore
        </Link>
        <button onClick={handleAuthentication} className="signout__button">
          Signout
        </button>
      </div>
    </div>
  );
}

export default Progress;
