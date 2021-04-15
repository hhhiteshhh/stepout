import React, { useState, useRef, useEffect } from "react";
import "./AllJournalEntries.css";
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
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import firebase from "firebase";
import Journal from "./Journal";
import nojournal from "../src/images/nojournal.jpg";
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

function AllJournalEntries() {
  const history = useHistory();
  const [open1, setOpen1] = useState(false);
  const [scroll1, setScroll1] = useState("body");
  const [{ user }] = useStateValue();
  const [maxWidth1, setMaxWidth1] = useState("lg");
  const [journal, setJournal] = useState([]);
  const [journalentry, setJournalentry] = useState("");

  const classes = useStyles();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(() => {
        history.push("/");
      });
    }
  };
  const handleClickOpen1 = (scrollType) => () => {
    setOpen1(true);
    setScroll1(scrollType);
  };

  const goback = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  const handleClose1 = () => {
    setJournal("");
    setOpen1(false);
  };
  const descriptionElementRef1 = useRef(null);

  const addJournalEntry = (e) => {
    e.preventDefault();
    db.collection("users").doc(user?.uid).collection("journals").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      userid: user.uid,
      journal: journalentry,
    });
    setJournalentry("");
    setOpen1(false);
  };

  useEffect(() => {
    if (open1) {
      const { current: descriptionElement } = descriptionElementRef1;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open1]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("journals")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setJournal(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              journal: doc.data().journal,
              time: doc.data().timestamp,
            }))
          )
        );
    } else {
      setJournal([]);
    }
  }, [user]);

  return (
    <div className="allJournalEntries">
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
        <DialogContent>
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
                  value={journalentry}
                  onChange={(e) => setJournalentry(e.target.value)}
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
          <Button
            onClick={handleClose1}
            color="primary"
            className="cllloseee___button"
          >
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
      <div className="spacerr"></div>
      <div className="useractivities__container">
        <div className="user__activity__container">
          <div className="useractivity__heading">
            <div>
              <KeyboardBackspaceIcon className="addbutton" onClick={goback} />
            </div>
            <b>
              <div>Your Journal</div>
            </b>
            <div>
              {" "}
              <AddIcon
                onClick={handleClickOpen1("body")}
                className="addbutton"
              />
            </div>
          </div>

          <div className="alljournal__container">
            <div className="allJournalentries">
              {journal?.length !== 0 ? (
                journal?.map((journal) => <Journal journal={journal} />)
              ) : (
                <img
                  src={nojournal}
                  alt=""
                  style={{ height: 350, width: 400 }}
                />
              )}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default AllJournalEntries;
