import React, { useEffect, useState, useRef } from "react";
import "./Dare.css";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
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

  const [displaydare, setDisplaydare] = useState(true);
  const [answer, setAnswer] = useState();
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("Dares")
        .doc(props.dare.answer)
        .get()
        .then((snapshot) => {
          setAnswer({
            answer: snapshot.data(),
            id: snapshot.id,
          });
        });
    }
  }, [user]);

  const handleComplete = (id) => {
    db.collection("users")
      .doc(user?.uid)
      .collection("DaresAnswers")
      .doc(id)
      .update({
        isCompleted: true,
      });
    setTimeout(handleClose, 2000);
  };
  return (
    <div style={{ padding: 20 }} className="dare__box1">
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className={classes.zoom}
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
              <b>Challenge: {answer?.answer.DareName}</b>
            </Typography>
            <Button
              onClick={() => {
                handleComplete(answer?.id);
              }}
              style={{ color: "#fff", backgroundColor: "#ee6c4d" }}
            >
              Completed
            </Button>
          </Toolbar>
        </AppBar>
        <div className="modal__1">
          <div style={{ objectFit: "contain" }}>
            <img
              src={answer?.answer.ImageURL}
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
                paddingLeft: "10%",
                textDecoration: "underline",
              }}
            >
              <b>Points to Remember</b>
            </span>
            {answer?.answer.Points.map((point) => (
              <div
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
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
          {answer?.answer.Advantages.map((advantage) => (
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
        props.dare.isCompleted ? (
          <div className="iscompletedtrue">
            <img
              src={answer?.answer.ImageURL}
              alt=""
              onClick={handleClickOpen}
              className="image__div"
            />
            <div className="middle">
              <div className="text__completed">Completed</div>
            </div>
          </div>
        ) : (
          <img
            src={answer?.answer.ImageURL}
            alt=""
            onClick={handleClickOpen}
            className="image__div"
          />
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default Dare;
