import React, { useState, useEffect } from "react";

import axios from "axios";

import { useStateContext } from "../contexts/StateContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const [leetcode, setleetcode] = useState("");
  useEffect(() => {
    callleetcodeApi();
  }, []);

  const [codeforces, setcodeforces] = useState("");
  const [codechef, setcodchef] = useState("");
  const [hackerrank, sethackerrank] = useState("");
  const [hackerearth, sethackerearth] = useState("");
  const [cses, setcses] = useState("");
  const [atcoder, setatcoder] = useState("");

  useEffect(() => {
    callcodeforcesApi();
  }, []);

  const { results, loading, getResults, searchTerm } = useStateContext();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=50`);
      }
    }
  }, [searchTerm, location.pathname]);

  var time = results?.ts;
  var finalTime = Math.round(finalTime);

  //leetcode
  function callleetcodeApi() {
    const options = {
      method: "GET",
      url: "https://random-leetcodes2.p.rapidapi.com/getleetcode",
      headers: {
        "X-RapidAPI-Host": "random-leetcodes2.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setleetcode(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function callcodeforcesApi() {
    const options = {
      method: "GET",
      url: "https://codeforcess15.p.rapidapi.com/codeforcess/random/",
      headers: {
        "X-RapidAPI-Host": "codeforcess15.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setcodeforces(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function calllcodechefApi() {
    const options = {
      method: "GET",
      url: "https://random-codechef2.p.rapidapi.com/getcodechef",
      headers: {
        "X-RapidAPI-Host": "random-codechef2.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setcodechef(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function callhackerrankApi() {
    const options = {
      method: "GET",
      url: "https://random-hackerrank2.p.rapidapi.com/gethackerrank",
      headers: {
        "X-RapidAPI-Host": "random-hackerrank2.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        sethackerrank(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function callhackerearthApi() {
    const options = {
      method: "GET",
      url: "https://random-hackerearth2.p.rapidapi.com/gethackerearth",
      headers: {
        "X-RapidAPI-Host": "random-hackerearth.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        sethackerearth(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function callcses() {
    const options = {
      method: "GET",
      url: "https://random-cses2.p.rapidapi.com/getcses",
      headers: {
        "X-RapidAPI-Host": "random-cses2.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setcses(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function callatcoder() {
    const options = {
      method: "GET",
      url: "https://random-atcoder2.p.rapidapi.com/getatcoder",
      headers: {
        "X-RapidAPI-Host": "random-atcoder2.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setatcoder(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const all = [
    leetcode,
    codechef,
    codeforces,
    atcoder,
    cses,
    hackerearth,
    hackerrank,
  ];
};

export default all;