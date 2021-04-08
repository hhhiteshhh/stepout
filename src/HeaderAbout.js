import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./HeaderAbout.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";

function HeaderAbout(props) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <DrawerToggleButton
        click={props.drawerClickHandler}
        className="header__toggle__button"
      />

      <div className="header__nav__option">
        <Link to="/" className="header__blog__home">
          Home
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about" className="about">
          About
        </Link>
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
      <div className="spacer1"></div>
      <div className="header__about">
        <Link to="/">Step Out</Link>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="spacer"></div>
      <div className="header__signin">
        {user ? (
          <Link to="/profile" className="linktohomepage">
            <Avatar
              className="post__avatar"
              alt={user.displayName}
              src="/static/images/avatar/1.jpg"
            />
            <span className="username"> {user.displayName} </span>
          </Link>
        ) : (
          <div className="signing">
            <Link to="/signin" className="signin">
              {" "}
              Sign In
            </Link>
            <Link to="/signup" className="signup">
              {" "}
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderAbout;
