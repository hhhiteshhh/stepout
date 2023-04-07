import React from "react";
import "./Aboutcomponent.css";
import pic1 from "./images/team 1.jpeg";
import pic2 from "./images/team 2.png";
import kk from "./images/kk.png";
import kkk from "./images/kkk.png";
import steps from "./images/steps.png";

function Aboutcomponent() {
  return (
    <div className="aboutcomponent">
      <div className="about__component__intro">
        <h1>
          {" "}
          Welcome
          <br />
          We are Team <span className="step__out"> Step Out</span>
        </h1>
      </div>

      <div className="about__component__intro1">
        <div className="about__component__intro__hitesh">
          {" "}
          <img src={pic1} alt="" className="teamimage"></img>
          <span className="name">
            <h1>Aarushi</h1> <br />
          </span>
          <span className="contact">
            <img src={kkk} className="footer__follow1" alt="" />
            <img src={kk} className="footer__follow2" alt="" />
          </span>
        </div>
        {/* <div className="about__component__intro__shivangi">
          <img src={pic2} alt="" className="teamimage"></img>
          <span className="name">
            <h1>Shivangi Bansal</h1> <br />
          </span>
          <span className="role">
            <h2>(Designer)</h2>
            <br />
          </span>
          <span className="contact">
            <img src={kkk} className="footer__follow1" alt="" />
            <img src={kk} className="footer__follow2" alt="" />
          </span>
        </div> */}
      </div>
      <div className="about__component__intro__text">
        {" "}
        <h2>
          {" "}
          Hi! I am Aarushi, an individuals with a passion of creativity -
          creativity makes me happy. I truly believe in the transformative power
          of influence and motivation and my ability to encourage challenges,
          elevate experiences, engage and inspire people everywhere. A good
          combination of desire and dedicated hard work is what I aim to
          inspire.{" "}
        </h2>
      </div>
      <div className="black"></div>
      <div className="about__component__purpose">
        <h1>
          <span className="purpose">Our Purpose</span>
        </h1>
        <span className="purpose__text">
          <h3>
            I used to feel like we want to do something, but I always excused
            our way out of it. My favorite one 'We don't have the time.'
            <br />
            <br />
            Well, 2020 proved me wrong. It taught us that time was never our
            issue, and if we think carefully every other reason is also just an
            excuse. We were just too comfortable in our bubble to even try
            something which we actually wanted. This realization was
            life-altering. It was the push that we needed.
            <br />
            <br /> That to grow we need to challenge ourselves. And exactly THAT
            is the purpose of Step Out. It bridges that gap between 'wanting to
            do something' to 'actually doing it'
            <br />
          </h3>
        </span>
      </div>

      <div className="about__component__process">
        <h1>
          <span className="process">
            Our Process
            <br />
          </span>
          <span className="process__steps">Break it into 5 simple steps:</span>
        </h1>

        <img src={steps} alt="" className="steps" />
        <div className="process__text">
          <h3>
            1. Acknowledgement
            <br />
            2. Battle with fears <br />
            3. Set goals <br />
            4. Make your Uncomfortable Comfortable <br />
            5. Being consistent
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Aboutcomponent;
