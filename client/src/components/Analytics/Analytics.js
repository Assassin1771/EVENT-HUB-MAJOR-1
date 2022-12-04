import React from "react";
import {Container, Paper} from "@material-ui/core";
import { Line } from 'react-chartjs-2';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'

import './Analytics.css'
import { getStyle, hexToRgba } from '@coreui/utils'

import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import img1 from "./Screenshot 2022-11-20 at 3.55.37 AM.png"

import navigation from '../_nav.js'



import Sidenav from "../Xtras/Sidenav.js";

import AdminStats from "../Xtras/AdminStats.js";

import Graphs from "../Xtras/Graphs.js";


const Analytics = () => {



    const dispatch = useDispatch()
   
  return(
    <div>
    <Sidenav/>
    <div style={{marginTop:"-21cm"}} className="wrapper d-flex flex-column min-vh-100 ">
   
      <div className="body flex-grow-1 px-3">
      <AdminStats/>
      {/* <Graphs/> */}
      </div>
    </div>
  </div>




   
    


  );
};

export default Analytics;
