import React, { useEffect, useState, useMemo } from "react";
import TelegramIcon from "@material-ui/icons/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";

import event from "../../images/event.png";
import amazon from "../../images/amazon.png";
import cf from "../../images/cf.webp";
import cs from "../../images/cs.png";
import useStyles from "./styles";

const Event = () => {
  const [activeChild, setActiveChild] = useState(0);

  const classes = useStyles();

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
  return (
    <div>
      <div>
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
        </Container>
        <div style={{ marginTop: "100px" }}>
          <Link to="/home">
            <EventNoteOutlinedIcon
              color="primary"
              style={{ fontSize: "100px", color: "black", marginLeft: "20%" }}
            />
          </Link>
          <Link to="/about">
            <HelpOutlineOutlinedIcon
              color="primary"
              style={{ fontSize: "100px", color: "black", marginLeft: "20%" }}
            />
          </Link>
          <Link to="/contact">
            <PhoneIcon
              color="primary"
              style={{ fontSize: "100px", color: "black", marginLeft: "20%" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
