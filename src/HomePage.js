import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import CarouselPage from "./slideFeature";
import challenge from "./images/challenge.jpg";
import question from "./images/question.jpg";
import goal from "./images/goal.png";
import journal from "./images/journal.png";
import reminder from "./images/reminder.png";
import statistics from "./images/statistics.png";
import sandeep from "./images/sandeep maheshwari.png";
import gopal from "./images/gaur gopal das.png";
import ted from "./images/ted.png";
import { makeStyles, Modal } from "@material-ui/core";

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
}));

function HomePage() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <div className="homepage">
      <Modal open={open1} onClose={handleClose1} className="video1">
        <div style={modalStyle} className={classes.paper}>
          <iframe
            title="sandeep"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mvYtqPWSipQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
      <Modal open={open2} onClose={handleClose2} className="video1">
        <div style={modalStyle} className={classes.paper}>
          <iframe
            title="tedx"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QijH4UAqGD8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
      <Modal open={open3} onClose={handleClose3} className="video1">
        <div style={modalStyle} className={classes.paper}>
          <iframe
            title="gopaldas"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EG3CvpkDvWw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
      <div className="homepage__container__1">
        <div className="homepage__container__1__left">
          Everything you ever wanted is one step{" "}
          <strong className="outside">outside</strong> your comfort zone.
          <br />
          <br /> We have to be honest about what we want and take risks rather
          than lie to ourselves and make excuses to stay in our comfort zone.
          <br /> <br />
          <Link to="/signup" className="signup">
            Sign Up
          </Link>
        </div>
        <div className="homepage__container__1__right">
          <CarouselPage className="carousel" />
        </div>
      </div>
      <div className="homepage__container__2">
        <div className="homepage__container__2__left">
          <img
            className="homepage__container__2__left__img1"
            src={question}
            alt=""
          ></img>
          <img
            className="homepage__container__2__left__img2"
            src={challenge}
            alt=""
          ></img>
        </div>
        <div className="homepage__container__2__right">
          With <strong className="stepout">Step Out</strong>, Challenge yourself
          to do something new and outside your comfort zone. Answer a simple
          question and get a challenge assigned. <br />
          <br />
          <Link to="/about">Learn More</Link>
        </div>
      </div>
      <div className="homepage__container__3">
        <div className="homepage__container__3__heading1">
          <strong>The Basic Features</strong>
        </div>
        <div className="homepage__container__3__heading2">
          Four Essential tools for getting started with your new jouney.
        </div>
        <div className="homepage__container__3__images">
          <div className="homepage__container__3__images__container">
            <img src={goal} className="container__3__images" alt="" />
            <div className="caption1">Personalised goal</div>
          </div>
          <div className="homepage__container__3__images__container">
            <img src={reminder} className="container__3__images" alt="" />
            <div className="caption2">Reminders</div>
          </div>

          <div className="homepage__container__3__images__container">
            <img src={statistics} className="container__3__images" alt="" />
            <div className="caption3">Statistics</div>
          </div>
          <div className="homepage__container__3__images__container">
            <img src={journal} className="container__3__images" alt="" />
            <div className="caption4">Journal</div>
          </div>
        </div>
      </div>

      <div className="homepage__container__4">
        <div className="homepage__container__4__heading1">
          <strong>Get Inspired</strong>
        </div>
        <div className="homepage__container__4__heading2">
          Listen to some famous speakers talking about what is comfort zone, how
          it is affecting us and why is it important to get out of our comfort
          zones.
        </div>
        <div className="homepage__container__4__images">
          <div
            onClick={() => setOpen1(true)}
            className="homepage__container__4__images__container"
          >
            <img src={sandeep} className="container__4__images" alt="" />
            <div className="caption">
              Sandeep maheshwari - Easiest way to get out of your comfort zone
            </div>
          </div>
          <div
            onClick={() => setOpen2(true)}
            className="homepage__container__4__images__container"
          >
            <img src={ted} className="container__4__images" alt="" />
            <div className="caption">
              TedX - Get comfortable with being uncomfortable
            </div>
          </div>

          <div
            onClick={() => setOpen3(true)}
            className="homepage__container__4__images__container"
          >
            <img src={gopal} className="container__4__images" alt="" />
            <div className="caption">
              Gaur Gopal Das - Growth Begins At The End Of The Comfort Zone
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__container__5">
        <div className="homepage__container__5__heading1">
          <strong>Ready to get started?</strong>
        </div>
        <div className="homepage__container__5__heading2">
          Still not convinced? Checkout the blog section and get inspired.
        </div>
        <div className="homepage__container__5__heading3">
          <Link to="/signup" className="signup">
            {" "}
            Sign up
          </Link>
          <div className="spacer2" />
          <Link to="/blog" className="blog__button">
            {" "}
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
