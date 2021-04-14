import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import "./HomeProfile.css";
import { Avatar, InputLabel } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add.js";
import pic1 from "./images/journals.png";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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

function HomeProfile(props) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("body");
  const [open1, setOpen1] = useState(false);
  const [scroll1, setScroll1] = useState("body");
  const [maxWidth, setMaxWidth] = useState("md");
  const [maxWidth1, setMaxWidth1] = useState("lg");
  const history = useHistory();
  const [{ user }] = useStateValue();
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [journal, setJournal] = useState("");

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
  const handleClickOpen1 = (scrollType) => () => {
    setOpen1(true);
    setScroll1(scrollType);
  };

  const handleClose = () => {
    setAnswer("");
    setOpen(false);
    setQuestion("");
  };

  const handleClose1 = () => {
    setJournal("");
    setOpen1(false);
  };
  const descriptionElementRef = useRef(null);
  const descriptionElementRef1 = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    } else {
      if (open1) {
        const { current: descriptionElement } = descriptionElementRef1;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }
  }, [open, open1]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("answers")
        .orderBy("timestamp", "desc")
        .limit(1)
        .onSnapshot((snapshot) => {
          setAnswers(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              answer: doc.data().answer,
              username: doc.data().username,
              question: doc.data().question,
              uid: doc.data().uid,
            }))
          );
        });
    } else {
      setAnswers([]);
    }
  }, [user]);

  const addJournalEntry = (e) => {
    e.preventDefault();
    db.collection("users").doc(user?.uid).collection("journals").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      userid: user.uid,
      journal: journal,
    });
    setJournal("");
    setOpen1(false);
  };

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
    <div className="homeprofile">
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
          <Button onClick={handleClose} color="primary" className="cllloseee___button">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        className="activityquestions"
        open={open1}
        onClose={handleClose1}
        scroll={scroll1}
        maxWidth={maxWidth1}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="scroll-dialog-title">
          <div>
            <strong>NEW ENTRY</strong>
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef1}
            tabIndex={-1}
          >
            <div className="scroll-dialog-text">
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="outlined-multiline-static"
                  label="Add Entry"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={journal}
                  onChange={(e) => setJournal(e.target.value)}
                />

                <br />
                <Button
                  className="submit__entry__button"
                  disabled={!journal}
                  type="submit"
                  onClick={addJournalEntry}
                >
                  <strong>ADD ENTRY</strong>
                </Button>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary" className="cllloseee___button">
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
        <Link to="/explore" className="homeexplore">
          Explore
        </Link>
        <button onClick={handleAuthentication} className="signout__button">
          Signout
        </button>
      </div>

      <div className="profile__container__1">
        <div className="profile__container__1__left">
          <div className="profile__container__1__left__1">
            <h1 className="journal">
              Journal <br />
            </h1>
            <br />
            <i style={{ fontFamily: "Pacifico" }}>
              Put your thoughts that clutter your mind
            </i>
            <br />
            <br />
            <b>Few Advantages:</b>
            <br />
            1) Clears and calms your mind.
            <br /> 2) Improves your memory
            <br /> 3) Let go of any negative thoughts or feelings
            <br /> 4) Unleash creativity
            <br />
            <div className="entry__button">
              <div className="add__entry" onClick={handleClickOpen1("body")}>
                Add Entry
              </div>
              <div className="all__entry">
                {" "}
                <Link to="/allJournalEntries">See all Entries</Link>
              </div>
            </div>
          </div>
          <div className="profile__container__1__left__2">
            <img src={pic1} alt="" className="investing" />
          </div>
        </div>
        <div className="profile__container__1__right">
          <div className="profile__container__1__right__1">
            <Avatar
              className="post__avatar"
              alt={user?.displayName}
              src="/static/images/avatar/1.jpg"
            />
            <span className="username__text"> {user?.displayName} </span>
          </div>
          <div className="profile__container__1__right__2">
            <div className="current__challenge">
              {" "}
              <br />
              Current Challenges{" "}
              <div>
                <b>1</b>
              </div>
            </div>
            <div className="completed__challenge">
              {" "}
              <br />
              Completed Challenges{" "}
              <div>
                <b>3</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile__container__2">
        <div className="quote">
          <div className="quote__symbol">”</div>
          <div className="quote__text">
            You don't always need a plan. Sometimes, you just need to
            breahe,trust,let go and see what happens.
          </div>
        </div>
        <div className="activities">
          <div className="activity__heading">
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
          {answers.map((answer, question, username) => (
            <Activities
              answer={answer}
              question={question}
              username={username}
            />
          ))}
          <div className="all__activities">
            <Link to="/useractivities">See all</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProfile;
