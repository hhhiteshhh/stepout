import React from "react";
import "./Footer.css";
import { Button, Link } from "@material-ui/core";
import logo from "./images/logo11.jpg";
import k from "./images/k.png";
import kk from "./images/kk.png";
import kkk from "./images/kkk.png";

function Footer() {
  return (
    <div className="footer">
      <Button
        onClick={() => window.scrollTo(0, 0)}
        className="footer__button"
        variant="outlined"
      >
        Back to top
      </Button>
      <div className="footer__info">
        <div className="footer_infobox1">
          <img src={logo} className="footer__logo" alt="" />
          <strong className="so"> Step Out</strong>
        </div>
        <div className="footer_infobox2">
          <h2> Latest blog Post</h2>
          <Link href="/blog">10 ways to get out of comfort...</Link>
          <Link href="/blog">What is comfort zone</Link>
          <Link href="/blog">How to expand your comfort...</Link>
        </div>
        <div className="footer_infobox3">
          <Link href="/about">
            <strong> About Us</strong>
          </Link>
        </div>
        <div className="footer_infobox4">
          <h4> Follow Us</h4>
          <div className="footer__image">
            <img src={kkk} className="footer__follow1" alt="" />
            <img src={kk} className="footer__follow2" alt="" />
            <img src={k} className="footer__follow3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
