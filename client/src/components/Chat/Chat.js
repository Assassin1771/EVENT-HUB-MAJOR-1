import React, { useEffect } from "react";
import { Grow, Grid } from "@material-ui/core";
import Chats from "./Chats/Chats";
import MessageContainer from "./MessageContainer/MessageContainer";

const Chat = ({ history }) => {
  const profile = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (!profile) {
      history.push("/");
    }
  }, []);
  return (
    <Grow in>
      {/* <div style={{ backgroundColor: "#FFFFFF" }}> */}
        <div style={{ backgroundColor: "black", overflow: "hidden" }}>
        <Grid
          container
          className="chatHeight"
          style={{ alignItems: "stretch", backgroundColor: "#06283D" }}
        >
          <Grid item sm={3} xs={12} style={{ borderRight: "1px solid #06283D" }}>
            <Chats />
          </Grid>
          <Grid item sm={9} xs={12}>
            <MessageContainer />
          </Grid>
        </Grid>
      </div>
    </Grow>
  );
};

export default Chat;
