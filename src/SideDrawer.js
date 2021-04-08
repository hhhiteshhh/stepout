import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./SideDrawer.css";

function SideDrawer(props) {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return (
    <div className={drawerClasses}>
      <Link to="/" className="sidedrawer__home">
        Home
      </Link>
      <Link to="/blog" className="sidedrawer__blog">
        Blog
      </Link>
      <Link to="/about" className="sidedrawer__about">
        About
      </Link>
      {user ? (
        <Link to="/profile" className="sidedrawer__username">
          {user.displayName}
        </Link>
      ) : (
        <div className="sidedrawer__signing">
          <Link to="/signin" className="sidedrawer__signin">
            {" "}
            Sign In
          </Link>
          <Link to="/signup" className="sidedrawer__signup">
            {" "}
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}

export default SideDrawer;
