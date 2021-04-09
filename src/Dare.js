import React, { useEffect, useState, useRef } from "react";
import "./Dare.css";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dare(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [displaydare, setDispalydare] = useState(true);
  const [answer, setAnswer] = useState();
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("Dares")
        .doc(props.dare.answer)
        .get()
        .then((snapshot) => {
          setAnswer(snapshot.data());
        });
    }
  });
  return (
    <div style={{ padding: 20 }}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar style={{ backgroundColor: "#fff" }}>
            <IconButton
              edge="start"
              color="#000"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ fontSize: 30, fontFamily: "Poppins", color: "#000" }}
            >
              <b>Challenge: {answer?.DareName}</b>
            </Typography>
            <Button
              onClick={handleClose}
              style={{ color: "#fff", backgroundColor: "#ee6c4d" }}
            >
              Completed
            </Button>
          </Toolbar>
        </AppBar>
        <div className="modal__1">
          <div style={{ objectFit: "contain" }}>
            <img
              src={answer?.ImageURL}
              alt=""
              className="modal__image"
              height="450px"
            />
          </div>
          <div>
            <span
              style={{
                fontSize: 24,
                fontFamily: "Pacifico",
                paddingLeft: "5%",
                textDecoration: "underline",
              }}
            >
              <b>Points to Remember</b>
            </span>
            {answer?.Points.map((point) => (
              <div
                style={{
                  paddingLeft: 15,
                  lineHeight: 2.0,
                  fontSize: 17,
                  fontFamily: "Poppins",
                }}
              >
                <ul>
                  <li>{point}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span
            style={{
              fontSize: 24,
              fontFamily: "Pacifico",
              textDecoration: "underline",
              padding: 20,
            }}
          >
            <b>Advantages</b>
          </span>
          {answer?.Advantages.map((advantage) => (
            <div
              style={{
                lineHeight: 2.0,
                fontSize: 17,
                fontFamily: "Poppins",
              }}
            >
              <ul>
                <li>{advantage}</li>
              </ul>
            </div>
          ))}
        </div>
      </Dialog>
      {displaydare ? (
        <img
          src={answer?.ImageURL}
          alt=""
          width="400px"
          height="300px"
          onClick={handleClickOpen}
          className="image__div"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dare;
