import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = (eventName) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      style={{ marginTop: "100px" }}
      container
      alignItems="stretch"
      spacing={9}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={4}>
          <Post post={post} eventName={eventName} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
