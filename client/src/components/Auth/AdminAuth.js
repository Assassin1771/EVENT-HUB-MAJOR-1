import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Icon from "./icon";
import { AUTH } from "../../constants/actionTypes";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup } from "../../actions/auth";

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

const AdminAuth = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const profile = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (profile) {
      history.push("/analytics");
    }
  }, []);

  // const switchMode = () => {
  //   setIsSignup(prevIsSignup => !prevIsSignup);
  //   setShowPassword(false);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  // const googleSuccess = async res => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: AUTH, data: { result, token } });
  //     history.push("/analytics");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  

  const googleError = () => alert("Google Sign In was unsuccessful. Try again later");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
        
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
        
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Secondary"
            className={classes.submit}
          >
            { "Sign In"}
          </Button>

        </form>
      </Paper>
    </Container>
  );
};

export default AdminAuth;
