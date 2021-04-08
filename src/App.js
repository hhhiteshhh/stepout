import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header1 from "./Header1";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { auth } from "./firebase";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import { useStateValue } from "./StateProvider";
import HomePage from "./HomePage";
import HomeProfile from "./HomeProfile";
import Footer from "./Footer";
import HeaderBlog from "./HeaderBlog";
import HeaderAbout from "./HeaderAbout";
import BlogPage from "./BlogPage";
import Aboutcomponent from "./Aboutcomponent";
import Challenges from "./Challenges";
import Progress from "./Progress";
import Explore from "./Explore";
import UserActivities from "./UserActivities";

function App() {
  const [state, setState] = useState(false);
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in /the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  

 const drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let backdrop;

  if (state.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <Router>
      <div className="App" style={{ height: "100%" }}>
        <Switch>
          <Route path="/blog">
            <HeaderBlog drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <BlogPage />
            <Footer />
          </Route>
          <Route path="/about">
            <HeaderAbout drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            <Aboutcomponent />
            {backdrop}
            <Footer />
          </Route>
          <Route path="/signin">
            <Header1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <SignIn />
          </Route>
          <Route path="/profile">
            <Header1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <HomeProfile />
          </Route>

          <Route path="/useractivities">
            <Header1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <UserActivities />
          </Route>
          <Route path="/challenges">
            <Header1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <Challenges />
          </Route>

          <Route path="/progress">
            <Header1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <Progress />
          </Route>

          <Route path="/explore">
            <Header1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <Explore />
          </Route>

          <Route path="/signup">
            <Header1 drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <SignUp />
          </Route>
          <Route path="/">
            <Header drawerClickHandler={drawerToggleClickHandler} />
            <HomePage />
            <SideDrawer show={state.sideDrawerOpen} />
            {backdrop}
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
