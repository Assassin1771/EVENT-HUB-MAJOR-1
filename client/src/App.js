import React, { useEffect } from "react";
import { Modal } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentId } from "./actions/currentSelected";
import { CLOSE_FORM } from "./constants/actionTypes";
import Form from "./components/Form/Form";
import CloseIcon from "@material-ui/icons/Close";
import { getUsers } from "./actions/users";
import socket from "./socket";
import { SET_ONLINE_USERS } from "./constants/actionTypes";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UserAuth from "./components/Auth/UserAuth";
import AdminAuth from "./components/Auth/AdminAuth";
import PostScreen from "./components/PostScreen/PostScreen";
import Chat from "./components/Chat/Chat";
import useStyles from "./styles";
import Event from "./components/Event/Event";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer.js"
import Analytics from "./components/Analytics/Analytics.js"
import UserStats from "./components/Xtras/UserStats.js"
import Timeline from "./components/Xtras/Timeline.js"
import UserSidenav from "./components/Xtras/UserSidenav.js"
import Userperforma from "./components/Xtras/Userperforma";
import Graphs from "./components/Xtras/Graphs";

import UserActivity from "./components/Xtras/UserActivity.js";
import PlatformStats from "./components/Xtras/PlatformStats.js";
import Favourite from "./components/Xtras/Favourite.js";
import PlatformActivity from "./components/Xtras/PlatformActivity.js"
import UserPerformance from "./components/Xtras/UserPerformance";

import Analyse from "./components/Xtras/Analyse";
import Admin from "./components/Xtras/Admin";


import Spontanity from "./components/Xtras/Spontanity";
import MostLikedPlatform from "./components/Xtras/MostLikedPlatform";
import MostViewedPlatform from "./components/Xtras/MostViewedPlatform";
import DomainSpecific from "./components/Xtras/DomainSpecific";



import './scss/style.scss'
const App = () => {
  const classes = useStyles();
  const open = useSelector((state) => state.formOpen);
  const authData = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();

  const closeForm = () => {
    dispatch(clearCurrentId());
    dispatch({ type: CLOSE_FORM });
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"))?.result;
    if (user) {
      socket.auth = { user };
      socket.connect();
    }

    return () => {
      socket.disconnect();
    };
  }, [authData]);

  socket.on("users", (users) => {
    const self = JSON.parse(localStorage.getItem("profile"))?.result;
    users = users.filter((user) => user.email !== self.email);
    dispatch({ type: SET_ONLINE_USERS, payload: users });
  });

  return (
   
    <BrowserRouter>
   
    <Navbar />
      <Modal open={open} onClose={() => closeForm()}>
        <div className={classes.modalDiv}>
          <CloseIcon
            className={classes.modalCloseIcon}
            onClick={() => closeForm()}
          />
          <Form />
        </div>
      </Modal>    
      <Switch>
        <Route path="/" exact component={Event} />
        <Route path="/home" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/userauth" exact component={UserAuth} />
        <Route path="/adminauth" exact component={AdminAuth} />
        <Route path="/userstats" exact component={UserStats} />
        <Route path="/timeline" exact component={Timeline} />
        {/* <Route path="/adminauth" exact component={AdminAuth} /> */}
        <Route path="/usersidenav" exact component={UserSidenav} />
        <Route path="/userperforma" exact component={Userperforma} />
        <Route path="/analytics" exact component={Analytics} />

        <Route path="/favourite" exact component={Favourite} />
        <Route path="/useractivity" exact component={UserActivity} />
        <Route path="/platformstats" exact component={PlatformStats} />
        <Route path="/platformactivity" exact component={PlatformActivity} />
        <Route path="/userperformance" exact component={UserPerformance} />
        <Route path="/analyse" exact component={Analyse} />

        <Route path="/post/:id" exact component={PostScreen} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/admin" exact component={Admin} />

        <Route path="/mostliked" exact component={MostLikedPlatform} />
        <Route path="/mostviewed" exact component={MostViewedPlatform} />
        <Route path="/spontanity" exact component={Spontanity} />
        <Route path="/domainspecific" exact component={DomainSpecific} />


      </Switch>
      
     
      <Footer/>
     
     
    </BrowserRouter>
   
  );
};

export default App;
