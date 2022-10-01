import React, { useEffect, useState, useMemo } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";
// import Carousel from "react-bootstrap/Carousel";

import event from "../../images/event.png";
import amazon from "../../images/amazon.png";
import cf from "../../images/cf.webp";
import cs from "../../images/cs.png";

import {
  clearCurrentId,
  clearPost,
  clearCurrentUser,
} from "../../actions/currentSelected";

import { getPosts } from "../../actions/posts";
import { getUsers } from "../../actions/users";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

const Home = () => {
  const [activeChild, setActiveChild] = useState(0);

  const [event, setEvent] = useState("");

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearCurrentId());
    dispatch(clearPost());
    dispatch(clearCurrentUser());
  }, []);

  const items = [
    {
      name: "LeetCode Contest",
      description: "Improve your programming skills",
      image: { cf },
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: { cs },
    },
    {
      name: "Random Name #3",
      description: "dasdassa",
      image: { amazon },
    },
  ];

  // const items = useMemo(() => [1, 2, 3, 4], []);

  const handleEvent = () => {
    setEvent(event);
  };

  const handleEventName = (e) => {
    setEvent(e.target.value);
    console.log("value is:", e.target.value);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <h1 align="center" style={{ color: "white" }}>
        {" "}
        TRENDING EVENTS
      </h1>
      <Carousel index={activeChild} autoPlay={true} navButtonsAlwaysVisible>
        {/* {items.map((i) => {
              return ( */}
        <Container
          style={{
            height: "300px",
            backgroundColor: "white",
            backgroundImage: `url(${amazon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography align="center" style={{ color: "black" }}>
            Amazon
          </Typography>
          <Typography align="center" style={{ color: "black" }}>
            Hiring Challenge
          </Typography>
        </Container>

        <Container
          style={{
            height: "300px",
            backgroundColor: "white",
            backgroundImage: `url(${cf})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography align="center" style={{ color: "black" }}>
            Codeforces
          </Typography>
          <Typography align="center" style={{ color: "black" }}>
            Programming Contest
          </Typography>
        </Container>

        <Container
          style={{
            height: "300px",
            backgroundColor: "white",
            backgroundImage: `url(${cs})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            imageHeight: "10px",
          }}
        >
          <Typography align="center" style={{ color: "black" }}>
            Codestudio
          </Typography>
          <Typography align="center" style={{ color: "black" }}>
            Coding Contest
          </Typography>
        </Container>

        {/* );
            })} */}
      </Carousel>

      {/* <Carousel>
        {items.map((item) => {
          <Container>
            <p>abc</p>
          </Container>;

          <p>damsdas</p>;
        })}

        <Typography>sdmflsdfmls</Typography>
        <Typography>fmsdofnsdkfdsn</Typography>
      </Carousel> */}

      {/* <h1 align="center" style={{ color: "white" }}>
        {" "}
        TRENDING EVENTS
      </h1>

      <Carousel
        index={activeChild} // <-- This controls the activeChild
        autoPlay={false} // <-- You probaly want to disable this for our purposes
        navButtonsAlwaysVisible
      >
        {items.map((i) => {
          return (
            <Container style={{ height: "300px", backgroundColor: "white" }}>
              <Typography align="center" key={i}>
                {i.name}
              </Typography>
              <Typography align="center">{i.description}</Typography>
            </Container>
          );
        })}
      </Carousel> */}

      {/* <input type="text" onChange={handleEventName}></input> */}
      {/* <button onClick={handleEvent}>SUBMIT</button> */}

      {/* <p>{console.log(event)}dasd</p> */}

      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            // style={{ marginTop: "100px" }}
          >
            <Posts eventName={event} />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
