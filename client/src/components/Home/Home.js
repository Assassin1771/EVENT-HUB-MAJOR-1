import React, { useEffect, useState, useMemo } from "react";
import { Container, Grow, Grid, Typography,Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import Carousel from "react-bootstrap/Carousel";

import event from "../../images/event.png";
import amazon from "../../images/amazon.png";
import cf from "../../images/cf.webp";
import cs from "../../images/cs.png";
import lt from "../../images/leetcode.jpeg";
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
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (  
    <Container maxWidth="lg" className={classes.container}>
            <h1 align="center" style={{ color: "white" }}>
        {" "}
        TRENDING EVENTS
      </h1>
      <Carousel index={activeChild} autoPlay={true} navButtonsAlwaysVisible>
    <Carousel.Item>
      <a href="https://www.codechef.com">
      <img
        className="d-block w-100"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg"
        alt="First slide"
        height="600px"
      />
</a>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://atcoder.jp/">
      <img
        className="d-block w-100"
        src="https://img.atcoder.jp/zone2021/7b005dd8b143aec06f75077c226ff376.png"
        alt="Second slide"
        height="600px"
      />
</a>

    </Carousel.Item>
    <Carousel.Item>
    <a href="https://www.codechef.com/CHIL2020">
      <img
        className="d-block w-100"
        src="https://cdn.codechef.com/download/small-banner/CHIL2020/1596948867.jpg"
        alt="Third slide"
        height="600px"
      />
</a>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://www.hackerrank.com/dtcc-codeathon-challenge">
      <img
        className="d-block w-100"
        src="https://hrcdn.net/s3_pub/istreet-assets/-Nl0DJkFlHJFO3Rl-FuwOQ/Rd%2002-26918_HackerRank%20Code-A-Thon_Twitter_1024x512.jpg"
        alt="Third slide"
        height="600px"
      />
</a>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://leetcode.com/">
      <img
        className="d-block w-100"
        src="https://assets.leetcode.com/static_assets/marketing/%E5%B9%BF%E5%91%8A_Banner.png"
        alt="Third slide"
        height="600px"
      />
</a>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://leetcode.com/contest/weekly-contest-315/">
      <img
        className="d-block w-100"
        src="https://pbs.twimg.com/media/FGw88HCVQAQpnxt.png"
        alt="Third slide"
        height="600px"
      />
</a>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://leetcode.com/contest/biweekly-contest-89/">
      <img
        className="d-block w-100"
        src="https://pbs.twimg.com/media/FKUoi_VUUAMKBcv.png"
        alt="Third slide"
        height="600px"
      />
</a>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://leetcode.com/">
      <img
        className="d-block w-100"
        src={lt}
        alt="Third slide"
        height="600px"
      />
</a>
    </Carousel.Item>
  </Carousel> 
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
