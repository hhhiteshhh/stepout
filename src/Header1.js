import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import "./Header1.css";
import logo from "./images/logo.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Header1(props) {
  return (
    <div className="header1">
      <DrawerToggleButton
        click={props.drawerClickHandler}
        className="header__toggle__button"
      />
      <div className="nav__option">
        <Link to="/" className="home1">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Tippy
          content={
            <span style={{ fontSize: "20px" }}>
              Email : abc@xyz.com
              <br />
              Ph No. : 1800xxxxxx
            </span>
          }
        >
          <div className="dropdown">Contact us</div>
        </Tippy>
      </div>
      <div className="spacer__header1"></div>
      <div className="header__about">
        <Link to="/">Step Out</Link>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header1;
