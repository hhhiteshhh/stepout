import React, { useEffect, useRef, useState } from "react";
import "./UserActivities.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { db, auth } from "./firebase";
import AddIcon from "@material-ui/icons/Add.js";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Activities from "./Activities";
import firebase from "firebase";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

function UserActivities() {
  const history = useHistory();
  const [{ user }] = useStateValue();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("body");
  const [maxWidth, setMaxWidth] = useState("md");
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
 
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        history.push("/");
      });
    }
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const goback = (e) => {
    e.preventDefault();
    history.push("/profile");
  };
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("answers")
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
    } else {
      setAnswers([]);
    }
  }, [user]);

  const addPost = (e) => {
    e.preventDefault();
    db.collection("users").doc(user?.uid).collection("answers").add({
      question: question,
      answer: answer,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      userid: user.uid,
    });
    db.collection("answerscopy").add({
      question: question,
      answer: answer,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      userid: user.uid,
    });
    setAnswer("");
    setOpen(false);
    setQuestion("");
  };

  return (
    <div className="useractivities">
      <Dialog
        className="activityquestions"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="scroll-dialog-title">
          <div>
            <strong>NEW POST</strong>
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="scroll-dialog-text">
              <form className={classes.root} noValidate autoComplete="off">
                <FormControl className={classes.formControl} id="questions">
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Choose your question wisely?
                  </InputLabel>
                  <Select
                    id="dropdownlist"
                    value={question}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="What did you do to make yourself happy today?">
                      What did you do to make yourself happy today?
                    </MenuItem>
                    <MenuItem value="How did you bring smile on someone else’s face">
                      How did you bring smile on someone else’s face
                    </MenuItem>
                    <MenuItem value="Compliment yourself(make it genuine)">
                      Compliment yourself(make it genuine)
                    </MenuItem>
                    <MenuItem value="What are you grateful for today">
                      What are you grateful for today
                    </MenuItem>
                    <MenuItem value="Share a life lesson you learned">
                      Share a life lesson you learned
                    </MenuItem>
                    <MenuItem value="What did you organise today and how do you feel about it">
                      What did you organise today and how do you feel about it
                    </MenuItem>
                    <MenuItem value="Share something you learning by plantation">
                      Share something you learning by plantation
                    </MenuItem>
                    <MenuItem value="How relaxed are you today? Did you try deep breathing">
                      How relaxed are you today? Did you try deep breathing
                    </MenuItem>
                    <MenuItem value="What did you achieve today">
                      What did you achieve today
                    </MenuItem>
                    <MenuItem value="Where does your imagination take you">
                      Where does your imagination take you
                    </MenuItem>
                    <MenuItem value="How active would you say you were today">
                      How active would you say you were today
                    </MenuItem>
                    <MenuItem value="What did you do today that didnot involve any electronics">
                      What did you do today that didnot involve any electronics
                    </MenuItem>
                    <MenuItem value="Which of the 5 sense you activated today and how">
                      Which of the 5 sense you activated today and how
                    </MenuItem>
                    <MenuItem value="Share a cherished moment you has with your friend(s)">
                      Share a cherished moment you has with your friend(s)
                    </MenuItem>
                  </Select>{" "}
                </FormControl>
                <br />

                <TextField
                  id="filled-multiline-static"
                  label="Answer..."
                  multiline
                  rows={5}
                  variant="filled"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <br />
                <Button
                  className="postbutton"
                  disabled={!answer}
                  type="submit"
                  onClick={addPost}
                >
                  <strong>Post</strong>
                </Button>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div className="navoptions">
        {" "}
        <Link to="/profile" className="homeprofile__link">
          Profile
        </Link>
        <Link to="/challenges" className="homechallenge">
          Challenges
        </Link>
        <Link to="/progress" className="homeprogress">
          Progress
        </Link>
        <Link to="/explore" className="homeexplore">
          Explore
        </Link>
        <button onClick={handleAuthentication} className="signout__button">
          Signout
        </button>
      </div>
      <div className="spacerr"></div>
      <div className="useractivities__container">
        <div className="user__activity__container">
          <div className="useractivity__heading">
            <div>
              <KeyboardBackspaceIcon className="addbutton" onClick={goback} />
            </div>
            <b>
              <div>Activity</div>
            </b>
            <div>
              {" "}
              <AddIcon
                onClick={handleClickOpen("body")}
                className="addbutton"
              />
            </div>
          </div>

          <div className="allactivity__container">
            <div className="allactivity">
              {answers?.map((answer, question, username) => (
                <Activities
                  answer={answer}
                  question={question}
                  username={username}
                />
              ))}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default UserActivities;
