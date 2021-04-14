import React, { useEffect } from "react";
import "./Explore.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Activities from "./Activities";
import { useState } from "react";

function Explore(props) {
  const history = useHistory();
  const [{ user }] = useStateValue();
  const [answers, setAnswers] = useState([]);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        history.push("/");
      });
    }
  };

  useEffect(() => {
    db.collection("answerscopy")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setAnswers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            answer: doc.data().answer,
            username: doc.data().username,
            question: doc.data().question,
            uid: doc.data().uid,
          }))
        )
      );
  }, []);

  return (
    <div className="explore">
      <div className="navoptions">
        {" "}
        <Link to="/profile" className="challenge__profile">
          Profile
        </Link>
        <Link to="/challenges" className="homechallenge">
          Challenges
        </Link>
        <Link to="/explore" className="explore__explore">
          Explore
        </Link>
        <button onClick={handleAuthentication} className="signout__button">
          Signout
        </button>
      </div>
      <div className="spacerr"></div>
      <div className="useractivities__container">
        {" "}
        <div className="activity__container">
          <div className="alluseractivity">
            {answers?.map((answer, question, username) => (
              <Activities
                answer={answer}
                question={question}
                username={username}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
