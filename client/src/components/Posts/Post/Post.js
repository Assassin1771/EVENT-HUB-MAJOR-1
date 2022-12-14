import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlined from "@material-ui/icons/CommentOutlined";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { setCurrentId } from "../../../actions/currentSelected";
import useStyles from "./styles";
import { OPEN_FORM } from "../../../constants/actionTypes";
import Posts from "../Posts";

const Post = ({ post, eventName }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?.result?.email) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {/* {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`} */}
          {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const handleEdit = () => {
    dispatch(setCurrentId(post._id));
    dispatch({ type: OPEN_FORM });
  };

  return (
    <Card className={classes.card}>
      <Link to={`post/${post._id}`}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title="View Post"
        />
      </Link>
      <div className={classes.overlay}>
        {/* <Typography variant="h6">{post.name}</Typography> */}
        <Typography varian t="body2">
          {/* {moment(post.createdAt).fromNow()} */}
        </Typography>
      </div>
      {/* {user?.result?.email === post?.creator && (
        <div className={classes.overlay2}>
          <Tooltip title="Edit Post">
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={handleEdit}
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </Tooltip>
        </div>
      )} */}
      <div className={classes.postBody}>
        <Typography
          noWrap
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography className={classes.message} variant="body2" component="p">
            {post.message.substring(0, 84)}{" "}
            {post.message.length > 84 && (
              <Link to={`post/${post._id}`} style={{ textDecoration: "none" }}>
                <span className={classes.moreIcon}>...more</span>
              </Link>
            )}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          {/* <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography> */}
          <Typography>
            <a href={post.link} target="_blank" rel="noreferrer">
              Visit Event
            </a>
          </Typography>
        </div>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </Button>
          <Link to={`post/${post._id}`}>
            <Button color="primary">
              <CommentOutlined fontSize="small" />
            </Button>
          </Link>
          {/* {user?.result?.email === post?.creator && (
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" /> Delete
            </Button>
          )} */}
        </CardActions>
      </div>
    </Card>
  );
};

export default Post;
