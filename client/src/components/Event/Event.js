import React, { useEffect, useState, useMemo } from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import event from "../../images/event.png";
import amazon from "../../images/amazon.png";
import cf from "../../images/cf.webp";
import cs from "../../images/cs.png";
import useStyles from "./styles";
import lt from "../../images/leetcode.jpeg";
import Footer from  "../Footer/Footer.js"

import ReactiveButton from 'reactive-button';
import '../../App.css'
import fang from './fang.png'

const Event = () => {
  


  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

  
    setTimeout(() => {
      setState('success');
    }, 2000);
  };


  const [activeChild, setActiveChild] = useState(0);

  const classes = useStyles();

 
  return (
    <div>
      <div>
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
        </Container>  
        <br/><br/>    <br/><br/>    <br/><br/>   
        <div>
          <div style={{marginLeft:"1cm"}}>
          <h1 className={classes.fgh} class="rty">In the age of programming and tech geeks, there are humongous hackathons and coding challanges taking place every day!<br/><br/> So which ones to apply for?<span class="rty" ><div style={{marginLeft:"15cm"}}>
<img class="cvb" src={fang}/>
</div>Explore perfectly curated list of challanges liked and recommend by pros to boost up your skills!</span></h1>
</div><br/>
<div className={classes.qwe}>
<Link to="/home" >
    <ReactiveButton className={classes.ghj} 
   
    style={{color:"red",marginLeft:"10cm",marginTop:"10cm",width:"15cm",height:"1cm",alignContent:"center",fontSize:"1rem"}} 
    rounded
    shadow
    outlined
    animation
    color="yellow"
     idleText="Upcoming Contest"
     buttonState={state}
     loadingText="Redirecting"
     successText="Redirected"
     onClick={onClickHandler} />
  </Link>
</div>

        </div>
 

      </div>
    </div>
  );
};

export default Event;
