import React, { useState, useEffect } from "react";
import "./Challenges.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import AddIcon from "@material-ui/icons/Add.js";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { makeStyles, Modal } from "@material-ui/core";
import Dare from "./Dare";
import firebase from "firebase";
import nodare from "./images/nodaresyet.jpg";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 570,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    color: "#fff",
    border: "1px solid #000",
    backgroundColor: "#000",
    outlineColor: "none",
    fontFamily: "Comfortaa",
  },
}));

function Challenges() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const [{ user, daress }, dispatch] = useStateValue();
  const [questions, setQuestions] = useState([]);
  const [dares, setDares] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("availableQuestions")
        .limit(1)
        .onSnapshot((snapshot) => {
          setQuestions(
            snapshot.docs.map((doc) => ({
              questionId: doc.id,
              question1: doc.data().q,
              option1: doc.data().options[0],
              option2: doc.data().options[1],
              option3: doc.data().options[2],
              option4: doc.data().options[3],
            }))
          );
        });
    }
  }, [open, user]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("DaresAnswers")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setDares(
            snapshot.docs.map((doc) => ({
              question: doc.data().question,
              answer: doc.data().answer,
              isCompleted: doc.data().isCompleted,
            }))
          );
        });
    }
  });

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        history.push("/");
      });
    }
  };

  const AddDare = (answer, question, qId) => {
    db.collection("users")
      .doc(user.uid)
      .collection("DaresAnswers")
      .doc(answer)
      .set({
        question: question,
        answer: answer,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        isCompleted: false,
      });

    db.collection("users")
      .doc(user.uid)
      .collection("availableQuestions")
      .doc(qId)
      .delete();
  };
  const myFunction = () => {
    window.location.reload();
  };

  return (
    <div className="challenge">
      {questions?.map((question1) => (
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setValue("");
          }}
        >
          <div style={modalStyle} className={classes.paper} id="modalll">
            <form>
              <FormControl
                component="fieldset"
                error={error}
                className={classes.formControl}
              >
                <FormLabel component="legend" className="question__text">
                  {question1.question1}
                </FormLabel>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value={question1.option1}
                    control={<Radio />}
                    label={question1.option1}
                    className="option__container"
                  />
                  <FormControlLabel
                    value={question1.option2}
                    control={<Radio />}
                    label={question1.option2}
                    className="option__container"
                  />

                  <FormControlLabel
                    value={question1.option3}
                    control={<Radio />}
                    label={question1.option3}
                    className="option__container"
                  />

                  <FormControlLabel
                    value={question1.option4}
                    control={<Radio />}
                    label={question1.option4}
                    className="option__container"
                  />
                </RadioGroup>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  disabled={!value}
                  className={classes.button}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setValue("");
                    AddDare(value, question1.question1, question1.questionId);
                    setTimeout(myFunction, 5000);
                  }}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </div>
        </Modal>
      ))}

      <div className="navoptions">
        {" "}
        <Link to="/profile" className="challenge__profile">
          Profile
        </Link>
        <Link to="/challenges" className="challenge__challenge">
          Challenges
        </Link>
        <Link to="/explore" className="challenge__explore">
          Explore
        </Link>
        <button onClick={handleAuthentication} className="signout__button">
          Signout
        </button>
      </div>
      <div
        className="get__challenge"
        onClick={() => {
          setOpen(true);
          if (questions.length === 0) {
            alert("No more questions available at the moment");
          }
        }}
      >
        <AddIcon className="addbutton" />
        <span className="getchallenge__text">Get a new challenge</span>
      </div>
      <div className="dare__box">
        {dares.length !== 0 ? (
          dares?.map((dare) => <Dare dare={dare} />)
        ) : (
          <img src={nodare} alt="" className="nodareImage" />
        )}
      </div>
    </div>
  );
}

export default Challenges;
